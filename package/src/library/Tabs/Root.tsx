import { Root, List, TabsProps } from '@radix-ui/react-tabs'
import { ReactNode, Ref, forwardRef, useImperativeHandle, useRef } from 'react'
import { cn } from '@/src/utils/class-merge.helper'

export interface TabsRootProps extends Omit<TabsProps, 'orientation'> {
  /**
   * @deprecated Use `Tabs.List` instead
   */
  triggers?: ReactNode[]
}

const TabsRoot = forwardRef<HTMLDivElement, TabsRootProps>(
  ({ children, className, triggers, ...rest }, ref: Ref<HTMLDivElement | null>) => {
    const tabsRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => tabsRef.current)

    return (
      <Root className={cn(className)} ref={tabsRef} {...rest}>
        <List className="flex h-8 w-full flex-row">{triggers}</List>
        {children}
      </Root>
    )
  },
)

TabsRoot.displayName = 'Tabs.Root'

export default TabsRoot
