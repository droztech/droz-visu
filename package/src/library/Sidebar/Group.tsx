import { cn } from '@/src/utils/class-merge.helper'

import { FC, HTMLAttributes } from 'react'

export interface SidebarGroupProps extends HTMLAttributes<HTMLDivElement> {}

const SidebarGroup: FC<SidebarGroupProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={cn('flex flex-col gap-2', className)} {...rest}>
      {children}
    </div>
  )
}

SidebarGroup.displayName = 'Sidebar.Group'

export default SidebarGroup
