import { TabsTrigger as RadixTabsTrigger, TabsTriggerProps as RadixTabsTriggerProps } from '@radix-ui/react-tabs'
import { Ref, forwardRef, useImperativeHandle, useRef } from 'react'

export interface TabsTriggerProps extends RadixTabsTriggerProps {}

const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>((
  { children, ...rest}, ref: Ref<HTMLButtonElement | null>
) => {
  const triggerRef = useRef<HTMLButtonElement>(null)

  useImperativeHandle(ref, () => triggerRef.current)

  return (
    <RadixTabsTrigger ref={triggerRef} {...rest}>{children}</RadixTabsTrigger>
  )
})

TabsTrigger.displayName = 'Tabs.Trigger'

export default TabsTrigger
