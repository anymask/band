import React from 'react'
import styled from 'styled-components'
import PageContainer from 'components/PageContainer'
import { colors } from 'ui'
import {
  Flex,
  Text,
  BackgroundCard,
  H1,
  Button,
  Card,
  Image,
  Box,
  H2,
  H3,
  AbsoluteLink,
  Link,
  Bold,
} from 'ui/common'
import { isMobile } from 'ui/media'

import StartBuilding from 'components/StartBuilding'

import WalletSrc from 'images/walletExample.svg'
import WalletIntegrate from 'images/band-wallet-integrate.svg'
import W3Img from 'images/web-3-js.svg'
import TrustlessCredentialStore from 'images/trustlessCredentialStore.svg'
import NoExtensionsRequired from 'images/noExtensionsRequired.svg'
import DomainWhitelist from 'images/internet-1.svg'

export default () => {
  const _isMobile = isMobile()
  return (
    <Box>
      <PageContainer>
        <Flex flexDirection="column" alignItems="center" mb={4}>
          <Box mt={[4, 5]} mb={[3, 4]}>
            <Text
              textAlign="center"
              fontSize={['24px', '38px']}
              fontWeight={900}
              color="#2a304e"
            >
              Band Web3 Wallet
            </Text>
          </Box>
          <Text
            textAlign={['left', 'center']}
            width={['calc(100vw - 40px)', '860px']}
            fontSize={['16px', '18px']}
            lineHeight={[1.63, 1.94]}
          >
            A all-in-one wallet for any function you may want to carry out in
            the Band ecosystem.
          </Text>
          <Image
            src={WalletSrc}
            my={['30px', '70px']}
            width={['calc(100vw - 40px)', '580px']}
          />
          <Card
            bg="#f6f8ff"
            pt={4}
            pb={['30px', 4]}
            px={['20px', '40px']}
            width={['calc(100vw - 40px)', '840px']}
          >
            <Text
              textAlign={['left', 'center']}
              color="#4c4c4c"
              fontSize={['16px', '18px']}
              lineHeight={[1.63, 1.94]}
            >
              The Band Web 3 wallet is especially designed to support a diverse
              array of dApps and functionalities. Users can store the tokens
              they receive in these wallets and use them for transactions
              occurring throughout the network. All of this is done with a
              user-centric design that provides high levels of security and
              multi-platform support.
            </Text>
            {/* <Flex
              mt={['30px', '50px']}
              justifyContent="center"
              flexDirection={['column-reverse', 'row']}
            >
              <Button
                variant="outline"
                style={{
                  color: '#545454',
                  height: '45px',
                  width: _isMobile ? '200px' : '185px',
                  padding: _isMobile ? '5px' : '0px',
                }}
              >
                Demo
              </Button>
              {_isMobile && <Flex my="5px" />}
              <Button
                variant="primary"
                ml={[0, 5]}
                style={{
                  height: '45px',
                  width: _isMobile ? '200px' : '240px',
                  padding: _isMobile ? '5px' : '0px',
                }}
              >
                Integrate Band Web3 Wallet
              </Button>
            </Flex> */}
          </Card>
        </Flex>
        <Flex flexDirection="column" alignItems="center" mb={5} mt={5}>
          <Box mb={2}>
            <H1 textAlign="center" dark>
              Integrate in 3 Simple Steps
            </H1>
          </Box>
          <Image src={WalletIntegrate} my={4} />
        </Flex>
        <Flex
          width={1}
          flexDirection="column"
          alignItems="center"
          style={{ borderTop: '1px solid #e2e2e2' }}
          mb={['430px', '200px']}
        >
          <Box mt={5} mb={'50px'}>
            <H1 textAlign="center" dark>
              Features
            </H1>
          </Box>
          <Flex
            width={['calc(100vw - 40px)', '660px']}
            flexDirection={['column', 'row']}
          >
            <Flex flex={1} flexDirection="column">
              <Image src={W3Img} width="100px" />
              <Text my="20px" fontSize="24px">
                Web3.js Compatible
              </Text>
              <Text lineHeight={1.5}>
                Developers can integrate Band Wallet into any existing DApp. The
                API exposes Web3Provider instance just like Metamask
              </Text>
            </Flex>
            <Flex
              flex={1}
              mt={['30px', '0px']}
              ml={['0px', '100px']}
              flexDirection="column"
            >
              <Image src={TrustlessCredentialStore} width="100px" />
              <Text my="20px" fontSize="24px">
                Trustless Credential Store
              </Text>
              <Text lineHeight={1.5}>
                Band Wallet enables registration and sign-in functionalities for
                DApps, without compromising security and private key ownership
              </Text>
            </Flex>
          </Flex>
          <Flex
            width={['calc(100vw - 40px)', '660px']}
            flexDirection={['column', 'row']}
            mt={['30px', '50px']}
          >
            <Flex flex={1} flexDirection="column">
              <Image src={NoExtensionsRequired} width="100px" />
              <Text my="20px" fontSize="24px">
                No Extensions Required
              </Text>
              <Text lineHeight={1.5}>
                Developers can integrate Band Wallet into any existing DApp. The
                API exposes Web3Provider instance just like Metamask
              </Text>
            </Flex>
            <Flex
              flex={1}
              mt={['30px', '0px']}
              ml={['0px', '100px']}
              flexDirection="column"
            >
              <Image src={DomainWhitelist} width="100px" />
              <Text my="20px" fontSize="24px">
                Domain Whitelist
              </Text>
              <Text lineHeight={1.5}>
                Nobody likes pesky confirmation popups. Band Wallet allows users
                to whitelist domain and bypass confirmations in low-value
                transactions
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </PageContainer>
      <Box
        mb={['-350px', '-80px']}
        style={{ background: '#17192e', color: '#ffffff' }}
      >
        <StartBuilding
          style={{ transform: `translateY(-${_isMobile ? 60 : 50}%)` }}
        />
      </Box>
    </Box>
  )
}
