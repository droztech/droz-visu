import { cn } from '@/src/utils/class-merge.helper'

import {
  TabsTrigger as RadixTabsTrigger,
  TabsTriggerProps as RadixTabsTriggerProps,
} from '@radix-ui/react-tabs'
import { ReactNode, forwardRef } from 'react'

export interface TabsTriggerProps
  extends Omit<RadixTabsTriggerProps, 'children'> {
  icon: ReactNode
  title: string
}

const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, icon, title, ...rest }, ref) => {
    return (
      <RadixTabsTrigger
        className={cn(
          'group box-content flex h-8 flex-row items-start justify-center  border-b border-gray-300 px-4 outline-none hover:h-7 hover:border-b-4 hover:border-primary-200 data-[state=active]:h-7 data-[state=active]:w-full data-[state=active]:border-b-4 data-[state=active]:border-primary-400 sm:w-full',
          className,
        )}
        ref={ref}
        {...rest}
      >
        <div className="flex h-5 flex-row items-center justify-center gap-2">
          <div className="h-4 w-4 text-gray-700 group-data-[state=active]:text-primary-400 [&_svg]:h-full [&_svg]:w-full">
            {icon}
          </div>
          <span className="hidden text-sm text-gray-700 group-data-[state=active]:block group-data-[state=active]:text-gray-900 sm:block">
            {title}
          </span>
        </div>
      </RadixTabsTrigger>
    )
  },
)

TabsTrigger.displayName = 'Tabs.Trigger'

export default TabsTrigger
