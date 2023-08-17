import { Card, Text } from '@nextui-org/react'
import React from 'react'
import { BsArrowUpCircleFill } from 'react-icons/all'

import { Flex } from '../styles/flex'

export const CardBalance2 = () => {
  return (
    <Card
      css={{
        width: '375px',
        bg: '',
        ml: '45px',
        borderRadius: '$xl',
        px: '$6',
        '@xsMax': {
          bg: 'transparent',
          ml: '0px'
        }
      }}
    >
      <Card.Body css={{ py: '$10' }}>
        <Flex css={{ gap: '$5' }}>
          <BsArrowUpCircleFill size={20} color={''} />
          <Flex direction={'column'}>
            <Text span css={{ color: '' }} weight={'bold'}>
              Austritte
            </Text>
          </Flex>
        </Flex>
        <Flex css={{ gap: '$6', py: '$4', pl: '28px' }} align={'center'}>
          <Text span size={'$xl'} weight={'semibold'}>
            481
          </Text>
        </Flex>
      </Card.Body>
    </Card>
  )
}
