import { cn } from '@/src/utils/class-merge.helper'

import { FC, HTMLAttributes } from 'react'

export interface MenuBodyProps extends HTMLAttributes<HTMLDivElement> {}

const MenuBody: FC<MenuBodyProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={cn(
        'flex h-full w-full flex-col justify-between gap-2 py-4',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export default MenuBody
