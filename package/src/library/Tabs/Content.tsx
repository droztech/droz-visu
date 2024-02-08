import { cn } from '@/src/utils/class-merge.helper'

import {
  TabsContent as RadixTabsContent,
  TabsContentProps as RadixTabsContentProps,
} from '@radix-ui/react-tabs'
import { forwardRef } from 'react'

export type TabsContentProps = RadixTabsContentProps

const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <RadixTabsContent
        className={cn('outline-none', className)}
        ref={ref}
        {...rest}
      >
        {children}
      </RadixTabsContent>
    )
  },
)

TabsContent.displayName = 'Tabs.Content'

export default TabsContent
