import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface MenuBodyProps extends HTMLAttributes<HTMLDivElement> {}

const MenuBody: FC<MenuBodyProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={clsx('flex flex-col justify-between h-full w-full', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

export default MenuBody
