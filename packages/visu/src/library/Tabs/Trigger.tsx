import { TabsTrigger as RadixTabsTrigger, TabsTriggerProps as RadixTabsTriggerProps } from '@radix-ui/react-tabs'
import clsx from 'clsx'
import { ReactNode, Ref, forwardRef, useImperativeHandle, useRef } from 'react'

export interface TabsTriggerProps extends Omit<RadixTabsTriggerProps, 'children'> {
  icon?: ReactNode
  title: string
}

const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>((
  { className, icon, title, ...rest}, ref: Ref<HTMLButtonElement | null>
) => {
  const triggerRef = useRef<HTMLButtonElement>(null)

  useImperativeHandle(ref, () => triggerRef.current)

  return (
    <RadixTabsTrigger
      className={clsx([className, 'group w-full box-content outline-none flex flex-row h-7 items-center justify-center gap-2 data-[state=active]:border-b-4 data-[state=active]:border-primary-400'])}
      ref={triggerRef}
      {...rest}
    >
      <div className='w-4 h-4 [&_svg]:h-full [&_svg]:w-full'>
        {icon}
      </div>
      <span className='hidden group-data-[state=active]:block sm:block'>{title}</span>
    </RadixTabsTrigger>
  )
})

TabsTrigger.displayName = 'Tabs.Trigger'

export default TabsTrigger
