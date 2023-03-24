import SidebarButton from './Button'
import SidebarDivider from './Divider'
import SidebarGroup from './Group'
import SidebarRoot from './Root'

export type { SidebarRootProps } from './Root'
export type { SidebarButtonProps } from './Button'
export type { SidebarDividerProps } from './Divider'
export type { SidebarGroupProps } from './Group'

const Sidebar = {
  Root: SidebarRoot,
  Button: SidebarButton,
  Divider: SidebarDivider,
  Group: SidebarGroup,
}

export default Sidebar
