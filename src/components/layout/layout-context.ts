import { createContext, useContext } from 'react'

interface ISidebarContextProps {
  collapsed: boolean
  setCollapsed: () => void
}

export const SidebarContext = createContext<ISidebarContextProps>({
  collapsed: false,
  setCollapsed: () => {}
})

export const useSidebarContext = () => {
  return useContext(SidebarContext)
}
