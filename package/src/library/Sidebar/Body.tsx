import { cn } from '@/src/utils/class-merge.helper'

import { FC, HTMLAttributes } from 'react'

export interface SidebarBodyProps extends HTMLAttributes<HTMLDivElement> {}

const SidebarBody: FC<SidebarBodyProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        'flex h-full w-full flex-col justify-between gap-2 px-2 py-4',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

SidebarBody.displayName = 'Sidebar.Body'

export default SidebarBody
