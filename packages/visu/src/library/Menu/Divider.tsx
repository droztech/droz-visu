import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface MenuDividerProps extends HTMLAttributes<HTMLDivElement> {}

const MenuDivider: FC<MenuDividerProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={clsx('border-b border-gray-300 my-2', className)}
      {...rest}
    />
  )
}

export default MenuDivider
