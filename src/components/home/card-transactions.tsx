import { Card, Divider, Text } from '@nextui-org/react'
import React from 'react'

import { Flex } from '../styles/flex'

export const CardTransactions = () => {
  return (
    <Card
      css={{
        mw: '375px',
        height: 'auto',
        bg: '$accents0',
        borderRadius: '$xl',
        justifyContent: 'start',
        px: '$10'
      }}
    >
      <Card.Body css={{ py: '$10' }}>
        <Flex css={{ gap: '$5' }} justify={'center'}></Flex>
        <Flex css={{ gap: '$6', py: '$4' }} direction={'column'}>
          <Flex css={{ gap: '$6' }} align={'center'} justify='between'>
            <Text span size={'$base'} weight={'semibold'}>
              Jose Perez
            </Text>
            <Text span css={{ color: '$accents8' }} size={'$xs'}>
              9/20/2021
            </Text>
          </Flex>

          <Divider css={{ my: '$2' }} />

          <Flex css={{ gap: '$6' }} align={'center'} justify='between'>
            <Text span size={'$base'} weight={'semibold'}>
              Andrew Steven
            </Text>
            <Text span css={{ color: '$accents8' }} size={'$xs'}>
              9/20/2021
            </Text>
          </Flex>

          <Divider css={{ my: '$2' }} />

          <Flex css={{ gap: '$6' }} align={'center'} justify='between'>
            <Text span size={'$base'} weight={'semibold'}>
              Ruben Garcia
            </Text>
            <Text span css={{ color: '$accents8' }} size={'$xs'}>
              2/20/2022
            </Text>
          </Flex>

          <Divider css={{ my: '$2' }} />

          <Flex css={{ gap: '$6' }} align={'center'} justify='between'>
            <Text span size={'$base'} weight={'semibold'}>
              Perla Garcia
            </Text>
            <Text span css={{ color: '$accents8' }} size={'$xs'}>
              3/20/2022
            </Text>
          </Flex>

          <Divider css={{ my: '$2' }} />

          <Flex css={{ gap: '$6' }} align={'center'} justify='between'>
            <Text span size={'$base'} weight={'semibold'}>
              Mathew Funez
            </Text>
            <Text span css={{ color: '$accents8' }} size={'$xs'}>
              5/20/2022
            </Text>
          </Flex>

          <Divider css={{ my: '$2' }} />

          <Flex css={{ gap: '$6' }} align={'center'} justify='between'>
            <Text span size={'$base'} weight={'semibold'}>
              Carlos Diaz
            </Text>
            <Text span css={{ color: '$accents8' }} size={'$xs'}>
              12/20/2022
            </Text>
          </Flex>
        </Flex>
      </Card.Body>
    </Card>
  )
}
