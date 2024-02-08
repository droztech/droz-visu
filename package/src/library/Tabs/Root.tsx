import { Root, TabsProps } from '@radix-ui/react-tabs'
import { forwardRef } from 'react'

export interface TabsRootProps extends Omit<TabsProps, 'orientation'> {}

const TabsRoot = forwardRef<HTMLDivElement, TabsRootProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Root ref={ref} {...rest}>
        {children}
      </Root>
    )
  },
)

TabsRoot.displayName = 'Tabs.Root'

export default TabsRoot
