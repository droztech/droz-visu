import { Root, List, TabsProps } from '@radix-ui/react-tabs'
import { clsx } from 'clsx'
import { Ref, forwardRef, useImperativeHandle, useRef } from 'react'

export interface TabsRootProps extends TabsProps {
  triggers: React.ReactNode[]
}

const TabsRoot = forwardRef<HTMLDivElement, TabsRootProps>(
  (
    { children, className, triggers, ...rest },
    ref: Ref<HTMLDivElement | null>,
  ) => {
    const tabsRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => tabsRef.current)

    return (
      <Root className={clsx([className])} ref={tabsRef} {...rest}>
        <List className="flex w-full flex-row">{triggers}</List>
        {children}
      </Root>
    )
  },
)

TabsRoot.displayName = 'Tabs.Root'

export default TabsRoot
