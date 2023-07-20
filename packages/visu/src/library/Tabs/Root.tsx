import { Tabs, TabsProps } from '@radix-ui/react-tabs'

import { Ref, forwardRef, useImperativeHandle, useRef } from "react";

export interface TabsRootProps extends TabsProps {}

const TabsRoot = forwardRef<HTMLDivElement, TabsRootProps>((
  { children, ...rest }, ref: Ref<HTMLDivElement | null>
) => {
  const tabsRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => tabsRef.current);

  return (
    <Tabs ref={tabsRef} {...rest}>{children}</Tabs>
  )
})

TabsRoot.displayName = 'Tabs.Root'

export default TabsRoot
