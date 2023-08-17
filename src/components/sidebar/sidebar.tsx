import { Avatar, Tooltip } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'

import { AccountsIcon } from '../icons/sidebar/accounts-icon'
import { FilterIcon } from '../icons/sidebar/filter-icon'
import { HomeIcon } from '../icons/sidebar/home-icon'
import { SettingsIcon } from '../icons/sidebar/settings-icon'
import { useSidebarContext } from '../layout/layout-context'
import { Box } from '../styles/box'
import { Flex } from '../styles/flex'
import { CompaniesDropdown } from './companies-dropdown'
import { Sidebar } from './sidebar.styles'
import { SidebarItem } from './sidebar-item'
import { SidebarMenu } from './sidebar-menu'

export const SidebarWrapper = () => {
  const router = useRouter()
  const { collapsed, setCollapsed } = useSidebarContext()

  return (
    <Box
      as='aside'
      css={{
        height: '100vh',
        zIndex: 202,
        position: 'sticky',
        top: '0'
      }}
    >
      {collapsed ? <Sidebar.Overlay onClick={setCollapsed} /> : null}

      <Sidebar collapsed={collapsed}>
        <Sidebar.Header>
          <CompaniesDropdown />
        </Sidebar.Header>
        <Flex direction={'column'} justify={'between'} css={{ height: '100%' }}>
          <Sidebar.Body className='body sidebar'>
            <SidebarMenu title='Menu'>
              <SidebarItem title='Home' icon={<HomeIcon />} isActive={router.pathname === '/'} href='/' />
              <SidebarItem
                isActive={router.pathname === '/accounts'}
                title='Accounts'
                icon={<AccountsIcon />}
                href='accounts'
              />
            </SidebarMenu>
          </Sidebar.Body>
          <Sidebar.Footer>
            <Tooltip content={'Settings'} rounded color='primary'>
              <SettingsIcon />
            </Tooltip>
            <Tooltip content={'Adjustments'} rounded color='primary'>
              <FilterIcon />
            </Tooltip>
            <Tooltip content={'Profile'} rounded color='primary'>
              <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' size={'sm'} />
            </Tooltip>
          </Sidebar.Footer>
        </Flex>
      </Sidebar>
    </Box>
  )
}
