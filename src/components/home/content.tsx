import { Link, Text } from '@nextui-org/react'
import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import React from 'react'

import { Box } from '../styles/box'
import { Flex } from '../styles/flex'
import { TableWrapper } from '../table/table'
import { CardAgents } from './card-agents'
import { CardTransactions } from './card-transactions'

const Chart = dynamic(() => import('../charts/steam').then(mod => mod.Steam), {
  ssr: false
})

export const Content = () => (
  <Box css={{ overflow: 'hidden', height: '100%' }}>
    <Flex
      css={{
        gap: '$8',
        pt: '$5',
        height: 'fit-content',
        flexWrap: 'wrap',
        '@lg': {
          flexWrap: 'nowrap'
        },
        '@sm': {
          pt: '$10'
        }
      }}
      justify={'center'}
    >
      <Flex
        css={{
          px: '$12',
          mt: '$8',
          '@xsMax': { px: '$10', width: '105%' },
          '@lg': { width: '70%' }
        }}
        direction={'column'}
      >
        {/* Card Section Top */}
        <Box>
          <Text
            h3
            css={{
              textAlign: 'center',
              '@sm': {
                textAlign: 'inherit'
              }
            }}
          >
            Übersicht
          </Text>
          <Flex
            css={{
              gap: '$10',
              flexWrap: 'wrap',
              justifyContent: 'center',
              '@sm': {
                flexWrap: 'nowrap'
              }
            }}
            direction={'row'}
          ></Flex>
        </Box>

        {/* Chart */}
        <Box>
          <Box
            css={{
              width: '100%',
              backgroundColor: '$accents0',
              boxShadow: '$lg',
              borderRadius: '$2xl',
              px: '$10',
              py: '$10'
            }}
          >
            <Chart />
          </Box>
        </Box>
      </Flex>

      {/* Left Section */}
      <Box
        css={{
          px: '$12',
          mt: '$8',
          height: 'fit-content',
          '@xsMax': { px: '$10' },
          gap: '$6',
          overflow: 'hidden'
        }}
      >
        <Text
          h3
          css={{
            textAlign: 'center',
            '@lg': {
              textAlign: 'inherit'
            }
          }}
        >
          Letzen Benutzungen
        </Text>
        <Flex
          direction={'column'}
          justify={'center'}
          css={{
            gap: '$8',
            flexDirection: 'row',
            flexWrap: 'wrap',
            '@sm': {
              flexWrap: 'nowrap'
            },
            '@lg': {
              flexWrap: 'nowrap',
              flexDirection: 'column'
            }
          }}
        >
          <CardTransactions />
          <CardAgents />
        </Flex>
      </Box>
    </Flex>

    {/* Table Latest Users */}
    <Flex
      direction={'column'}
      justify={'center'}
      css={{
        width: '100%',
        py: '$10',
        px: '$10',
        mt: '$8',
        '@sm': { px: '$20' }
      }}
    >
      <Flex justify={'between'} wrap={'wrap'}>
        <Text
          h3
          css={{
            textAlign: 'center',
            '@lg': {
              textAlign: 'inherit'
            }
          }}
        >
          Latest Users
        </Text>
        <NextLink href='/accounts'>
          <Link
            block
            color='primary'
            css={{
              textAlign: 'center',
              '@lg': {
                textAlign: 'inherit'
              }
            }}
          >
            View All
          </Link>
        </NextLink>
      </Flex>
      <TableWrapper />
    </Flex>
  </Box>
)
