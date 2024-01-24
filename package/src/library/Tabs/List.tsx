import { List } from '@radix-ui/react-tabs'
import { FC, HTMLAttributes, Ref, forwardRef, useImperativeHandle, useRef } from 'react'
import { cn } from '@/src/utils/class-merge.helper'

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {}

const TabsList: FC<TabsListProps> = forwardRef<HTMLDivElement, TabsListProps>(
  ({ children, className, ...rest }, ref: Ref<HTMLDivElement | null>) => {
    const elementRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => elementRef.current)

    return (
      <List className={cn('flex h-8 w-full flex-row', className)} ref={elementRef} {...rest}>
        {children}
      </List>
    )
  },
)

TabsList.displayName = 'Tabs.List'

export default TabsList
