import {
  TabsContent as RadixTabsContent,
  TabsContentProps as RadixTabsContentProps,
} from '@radix-ui/react-tabs'
import { clsx } from 'clsx'
import { Ref, forwardRef, useImperativeHandle, useRef } from 'react'

export type TabsContentProps = RadixTabsContentProps

const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ children, className, ...rest }, ref: Ref<HTMLDivElement | null>) => {
    const contentRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => contentRef.current)

    return (
      <RadixTabsContent
        className={clsx([className, 'outline-none'])}
        ref={contentRef}
        {...rest}
      >
        {children}
      </RadixTabsContent>
    )
  },
)

TabsContent.displayName = 'Tabs.Content'

export default TabsContent
