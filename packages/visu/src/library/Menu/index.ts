import MenuButton from './Button'
import MenuDivider from './Divider'
import MenuGroup from './Group'
import MenuRoot from './Root'

export type { MenuRootProps } from './Root'
export type { MenuDividerProps } from './Divider'
export type { MenuButtonProps } from './Button'
export type { MenuGroupProps } from './Group'

const Menu = {
  Root: MenuRoot,
  Divider: MenuDivider,
  Button: MenuButton,
  Group: MenuGroup,
}

export default Menu
