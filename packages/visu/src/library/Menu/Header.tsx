import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface MenuHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const MenuHeader: FC<MenuHeaderProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={clsx('px-2 py-6 border-b border-gray-300', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

export default MenuHeader
