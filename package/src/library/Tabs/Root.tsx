import { Root, TabsProps } from '@radix-ui/react-tabs'
import { Ref, forwardRef, useImperativeHandle, useRef } from 'react'

export interface TabsRootProps extends Omit<TabsProps, 'orientation'> {}

const TabsRoot = forwardRef<HTMLDivElement, TabsRootProps>(
  ({ children, ...rest }, ref: Ref<HTMLDivElement | null>) => {
    const tabsRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => tabsRef.current)

    return (
      <Root ref={tabsRef} {...rest}>
        {children}
      </Root>
    )
  },
)

TabsRoot.displayName = 'Tabs.Root'

export default TabsRoot
