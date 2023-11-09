import { List } from '@radix-ui/react-tabs'
import { clsx } from 'clsx'
import {
  FC,
  HTMLAttributes,
  Ref,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react'

export interface TabsListProps extends HTMLAttributes<HTMLDivElement> {}

const TabsList: FC<TabsListProps> = forwardRef<HTMLDivElement, TabsListProps>(
  ({ children, className, ...rest }, ref: Ref<HTMLDivElement | null>) => {
    const elementRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => elementRef.current)

    return (
      <List
        className={clsx('flex h-8 w-full flex-row', className)}
        ref={elementRef}
        {...rest}
      >
        {children}
      </List>
    )
  },
)

TabsList.displayName = 'Tabs.List'

export default TabsList
