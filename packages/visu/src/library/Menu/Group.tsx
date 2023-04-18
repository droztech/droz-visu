import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface MenuGroupProps extends HTMLAttributes<HTMLDivElement> {}

const MenuGroup: FC<MenuGroupProps> = ({ children, className, ...rest }) => {
  return (
    <div className={clsx('flex flex-col gap-2', className)} {...rest}>
      {children}
    </div>
  )
}

export default MenuGroup
