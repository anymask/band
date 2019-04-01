import { connect } from 'react-redux'
import BN from 'bn.js'
import { withRouter } from 'react-router-dom'

import RichlistBodyRender from './RichlistBodyRender'

import { holdersSelector } from 'selectors/holder'
import { communityDetailSelector } from 'selectors/communities'

const mapStateToProps = (
  state,
  { communityAddress, currentPage, pageSize },
) => {
  const community = communityDetailSelector(state, {
    address: communityAddress,
  })
  const totalSupply = community && community.get('totalSupply')
  const items = holdersSelector(state, {
    address: communityAddress,
    page: currentPage,
    pageSize,
  }).map(item => ({
    ...item,
    percentage:
      community &&
      (item.balance.mul(new BN(100)).toString() / totalSupply).toFixed(2),
  }))
  while (items.length < pageSize) {
    items.push(null)
  }
  return { items }
}

export default withRouter(connect(mapStateToProps)(RichlistBodyRender))
