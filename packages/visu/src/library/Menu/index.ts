import MenuButton from './Button'
import MenuDivider from './Divider'
import MenuGroup from './Group'
import MenuRoot from './Root'

export type { MenuButtonProps } from './Button'
export type { MenuDividerProps } from './Divider'
export type { MenuGroupProps } from './Group'
export type { MenuRootProps } from './Root'

const Menu = {
  Button: MenuButton,
  Divider: MenuDivider,
  Group: MenuGroup,
  Root: MenuRoot,
}

export default Menu
