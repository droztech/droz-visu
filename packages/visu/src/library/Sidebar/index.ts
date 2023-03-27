import SidebarButton from './Button'
import SidebarDivider from './Divider'
import SidebarGroup from './Group'
import SidebarLayout from './Layout'
import SidebarRoot from './Root'

export type { SidebarLayoutProps } from './Layout'
export type { SidebarRootProps } from './Root'
export type { SidebarButtonProps } from './Button'
export type { SidebarDividerProps } from './Divider'
export type { SidebarGroupProps } from './Group'

const Sidebar = {
  Layout: SidebarLayout,
  Root: SidebarRoot,
  Button: SidebarButton,
  Divider: SidebarDivider,
  Group: SidebarGroup,
}

export default Sidebar
