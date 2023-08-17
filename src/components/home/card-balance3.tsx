import { Button, Card, Text } from '@nextui-org/react'
import React from 'react'
import { BsPeopleFill } from 'react-icons/all'

import { Flex } from '../styles/flex'

export const CardBalance3 = () => {
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
          <BsPeopleFill size={20} color={''} />
          <Flex direction={'column'}>
            <Text span css={{ color: '' }} weight={'bold'}>
              Doppelverwendungen
            </Text>
          </Flex>
        </Flex>
        <Flex css={{ gap: '$6', py: '$4', pl: '28px' }} align={'center'}>
          <Button size={'sm'} color={'success'}>
            <Text size={'$xs'} weight={'bold'}>
              6 Prüfen
            </Text>
          </Button>
        </Flex>
      </Card.Body>
    </Card>
  )
}
