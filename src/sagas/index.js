import { all, fork, put, delay, select } from 'redux-saga/effects'
import { currentUserSelector } from 'selectors/current'
import { updateProvider, saveBandInfo, saveCommunityInfo } from 'actions'

import balancesSaga from 'sagas/balances'
import ordersSaga from 'sagas/orders'
import priceSaga from 'sagas/prices'
import providersSaga from 'sagas/providers'
import rewardsSaga from 'sagas/rewards'
import transactionsSaga from 'sagas/transaction'
import parameterSaga from 'sagas/parameters'
import proposalSaga from 'sagas/proposals'

import { BandProtocolClient } from 'band.js'

function* baseInitialize() {
  BandProtocolClient.setAPI('https://api-wip.rinkeby.bandprotocol.com')
  const tempBandClient = yield BandProtocolClient.make({})
  const { address, price, last24Hrs } = yield tempBandClient.getBandInfo()

  yield put(
    // TODO: Mock on price and last24hr
    saveBandInfo(address, '1000000000000000000000000', price, last24Hrs),
  )

  const dapps = yield tempBandClient.getDAppsInfo()
  for (const dapp of dapps) {
    yield put(
      saveCommunityInfo(
        dapp.name,
        dapp.symbol,
        dapp.address,
        dapp.author,
        dapp.logo,
        dapp.description,
        dapp.website,
        dapp.marketCap,
        dapp.price,
        dapp.last24Hrs,
      ),
    )
  }

  // Update user address and balance after fetch all data
  yield fork(checkProvider)
}

function* checkProvider() {
  while (true) {
    const userState = yield select(currentUserSelector)
    const userAddress =
      (window.web3 &&
        (yield new Promise((resolve, reject) => {
          window.web3.eth.getAccounts((error, users) => {
            if (error) reject(error)
            else resolve(users)
          })
        }))[0]) ||
      null
    if (userAddress !== userState) {
      yield put(
        updateProvider(userAddress, window.web3 && window.web3.currentProvider),
      )
    }
    yield delay(100)
  }
}

export default function*() {
  yield all([
    fork(providersSaga),
    fork(balancesSaga),
    fork(transactionsSaga),
    fork(ordersSaga),
    fork(priceSaga),
    fork(rewardsSaga),
    fork(parameterSaga),
    fork(proposalSaga),
  ])
  yield* baseInitialize()
}
