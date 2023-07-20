import { Root, List, TabsProps } from '@radix-ui/react-tabs'

import { Ref, forwardRef, useImperativeHandle, useRef } from "react";

export interface TabsRootProps extends TabsProps {
  triggers: React.ReactNode[]
}

const TabsRoot = forwardRef<HTMLDivElement, TabsRootProps>((
  { children, triggers, ...rest }, ref: Ref<HTMLDivElement | null>
) => {
  const tabsRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => tabsRef.current);

  return (
    <Root ref={tabsRef} {...rest}>
      <List className='flex w-full flex-row'>
        {triggers}
      </List>
      {children}
    </Root>
  )
})

TabsRoot.displayName = 'Tabs.Root'

export default TabsRoot
