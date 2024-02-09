import { cn } from '@/src/utils/class-merge.helper'

import { FC, HTMLAttributes } from 'react'

export interface SidebarLayoutProps extends HTMLAttributes<HTMLDivElement> {}

const SidebarLayout: FC<SidebarLayoutProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        'flex w-full flex-row [&>*:nth-child(2)]:w-full',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

SidebarLayout.displayName = 'Sidebar.Layout'

export default SidebarLayout
