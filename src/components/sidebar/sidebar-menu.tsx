import { Text } from '@nextui-org/react'
import React from 'react'

import { Flex } from '../styles/flex'

interface ISidebarMenuProps {
  title: string
  children?: React.ReactNode
}

export const SidebarMenu = ({ title, children }: ISidebarMenuProps) => {
  return (
    <Flex css={{ gap: '$4' }} direction={'column'}>
      <Text
        span
        size={'$xs'}
        weight={'normal'}
        css={{
          letterSpacing: '0.04em',
          lineHeight: '$xs'
        }}
      >
        {title}
      </Text>
      {children}
    </Flex>
  )
}