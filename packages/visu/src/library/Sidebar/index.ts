import SidebarBody from './Body'
import SidebarButton from './Button'
import SidebarGroup from './Group'
import SidebarHeader from './Header'
import SidebarLayout from './Layout'
import SidebarLink from './Link'
import SidebarRoot from './Root'

export type { SidebarButtonProps } from './Button'
export type { SidebarLinkProps } from './Link'
export type { SidebarGroupProps } from './Group'
export type { SidebarLayoutProps } from './Layout'
export type { SidebarRootProps } from './Root'
export type { SidebarBodyProps } from './Body'
export type { SidebarHeaderProps } from './Header'

const Sidebar = {
  Button: SidebarButton,
  Link: SidebarLink,
  Group: SidebarGroup,
  Layout: SidebarLayout,
  Root: SidebarRoot,
  Body: SidebarBody,
  Header: SidebarHeader,
}

export default Sidebar
