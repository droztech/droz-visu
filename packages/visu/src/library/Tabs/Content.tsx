import { TabsContent as RadixTabsContent, TabsContentProps as RadixTabsContentProps } from '@radix-ui/react-tabs'
import { Ref, forwardRef, useImperativeHandle, useRef } from 'react'

export interface TabsContentProps extends RadixTabsContentProps {}

const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>((
  { children, ...rest }, ref: Ref<HTMLDivElement | null>
) => {
  const contentRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => contentRef.current)

  return (
    <RadixTabsContent ref={contentRef} {...rest}>{children}</RadixTabsContent>
  )
})

TabsContent.displayName = 'Tabs.Content'

export default TabsContent
