import { FC, HTMLAttributes } from 'react'
import { cn } from '@/src/utils/class-merge.helper'

export interface SidebarLayoutProps extends HTMLAttributes<HTMLDivElement> {}

const SidebarLayout: FC<SidebarLayoutProps> = ({ children, className, ...rest }) => {
  return (
    <div className={cn(className, 'flex w-full flex-row [&>*:nth-child(2)]:w-full')} {...rest}>
      {children}
    </div>
  )
}

SidebarLayout.displayName = 'Sidebar.Layout'

export default SidebarLayout
