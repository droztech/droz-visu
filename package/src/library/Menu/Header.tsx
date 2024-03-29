import { cn } from '@/src/utils/class-merge.helper'

import { FC, HTMLAttributes } from 'react'

export interface MenuHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const MenuHeader: FC<MenuHeaderProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={cn('border-b border-gray-300 px-2 py-6', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

export default MenuHeader
