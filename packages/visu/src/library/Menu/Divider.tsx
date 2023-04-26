import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface MenuDividerProps extends HTMLAttributes<HTMLDivElement> {}

const MenuDivider: FC<MenuDividerProps> = ({ className, ...rest }) => {
  return (
    <div
      className={clsx([className, 'border-b', 'border-gray-300', 'my-2'])}
      {...rest}
    />
  )
}

MenuDivider.displayName = 'Menu.Divider'

export default MenuDivider
