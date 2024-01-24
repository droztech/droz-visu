import { FC, HTMLAttributes } from 'react'
import { cn } from '@/src/utils/class-merge.helper'

export interface SidebarGroupProps extends HTMLAttributes<HTMLDivElement> {}

const SidebarGroup: FC<SidebarGroupProps> = ({ children, className, ...rest }) => {
  return (
    <div className={cn(className, 'flex flex-col gap-2')} {...rest}>
      {children}
    </div>
  )
}

SidebarGroup.displayName = 'Sidebar.Group'

export default SidebarGroup
