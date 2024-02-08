import { cn } from '@/src/utils/class-merge.helper'

import { List } from '@radix-ui/react-tabs'
import { FC, HTMLAttributes, forwardRef } from 'react'

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {}

const TabsList: FC<TabsListProps> = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <List
        className={cn('flex h-8 w-full flex-row', className)}
        ref={ref}
        {...rest}
      >
        {children}
      </List>
    )
  },
)

TabsList.displayName = 'Tabs.List'

export default TabsList
