import { Card, Text } from '@nextui-org/react'
import React from 'react'
import { BsArrowDownCircleFill } from 'react-icons/all'

import { Flex } from '../styles/flex'

export const CardBalance1 = () => {
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
          <BsArrowDownCircleFill size={20} color={''} />
          <Flex direction={'column'}>
            <Text span css={{ color: '' }} weight={'bold'}>
              Eintritt
            </Text>
          </Flex>
        </Flex>
        <Flex css={{ gap: '$5', py: '$4', pl: '28px' }} align={'center'}>
          <Text span size={'$xl'} css={{ color: '' }} weight={'semibold'}>
            6312
          </Text>
        </Flex>
      </Card.Body>
    </Card>
  )
}
