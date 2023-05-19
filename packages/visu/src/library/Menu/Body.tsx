import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface MenuBodyProps extends HTMLAttributes<HTMLDivElement> {}

const MenuBody: FC<MenuBodyProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={clsx(
        'flex flex-col py-4 justify-between h-full w-full gap-2',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export default MenuBody
