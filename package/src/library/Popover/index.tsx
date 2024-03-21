import { cn } from '@/src/utils/class-merge.helper'

import * as RadixPopover from '@radix-ui/react-popover'
import { FC, ReactNode } from 'react'

export interface PopoverRootProps extends RadixPopover.PopoverProps {
  className?: string
  placeholder?: string
  icon?: ReactNode
}

const Popover: FC<PopoverRootProps> = ({
  icon,
  children,
  className,
  placeholder,
  ...rest
}) => {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>
        <button
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-full bg-primary-200',
            className,
          )}
        >
          {icon}
        </button>
      </RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          className="PopoverContent border-none p-2"
          sideOffset={5}
          {...rest}
        >
          <div className={cn('text-sm font-normal text-gray-500', className)}>
            {placeholder}
          </div>
          {children}
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}

Popover.displayName = 'Popover'

export default Popover
