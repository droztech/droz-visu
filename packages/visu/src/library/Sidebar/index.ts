import SidebarButton from './Button'
import SidebarDivider from './Divider'
import SidebarGroup from './Group'
import SidebarLayout from './Layout'
import SidebarRoot from './Root'

export type { SidebarButtonProps } from './Button'
export type { SidebarDividerProps } from './Divider'
export type { SidebarGroupProps } from './Group'
export type { SidebarLayoutProps } from './Layout'
export type { SidebarRootProps } from './Root'

const Sidebar = {
  Button: SidebarButton,
  Divider: SidebarDivider,
  Group: SidebarGroup,
  Layout: SidebarLayout,
  Root: SidebarRoot,
}

export default Sidebar
