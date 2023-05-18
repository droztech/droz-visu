import MenuBody from './Body'
import MenuButton from './Button'
import MenuDivider from './Divider'
import MenuGroup from './Group'
import MenuHeader from './Header'
import MenuRoot from './Root'

export type { MenuButtonProps } from './Button'
export type { MenuDividerProps } from './Divider'
export type { MenuGroupProps } from './Group'
export type { MenuRootProps } from './Root'
export type { MenuBodyProps } from './Body'
export type { MenuHeaderProps } from './Header'

const Menu = {
  Button: MenuButton,
  Divider: MenuDivider,
  Group: MenuGroup,
  Root: MenuRoot,
  Body: MenuBody,
  Header: MenuHeader,
}

export default Menu
