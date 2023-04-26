import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface MenuGroupProps extends HTMLAttributes<HTMLDivElement> {}

const MenuGroup: FC<MenuGroupProps> = ({ children, className, ...rest }) => {
  return (
    <div className={clsx([className, 'flex', 'flex-col', 'gap-2'])} {...rest}>
      {children}
    </div>
  )
}

MenuGroup.displayName = 'Menu.Group'

export default MenuGroup
