import SidebarButton from './Button'
import SidebarDivider from './Divider'
import SidebarGroup from './Group'
import SidebarLayout from './Layout'
import SidebarRoot from './Root'

export type { SidebarRootProps } from './Root'
export type { SidebarButtonProps } from './Button'

const Sidebar = {
  Layout: SidebarLayout,
  Root: SidebarRoot,
  Button: SidebarButton,
  Divider: SidebarDivider,
  Group: SidebarGroup,
}

export default Sidebar
