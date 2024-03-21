import { cn } from '@/src/utils/class-merge.helper'
import { Position } from '@types'

import * as RadixPopover from '@radix-ui/react-popover'
import { FC, ReactNode } from 'react'

export interface PopoverProps extends RadixPopover.PopoverProps {
  className?: string
  placeholder?: string
  icon: ReactNode
  align?: 'start' | 'end' | 'center'
  side?: Position
}

const Popover: FC<PopoverProps> = ({
  icon,
  children,
  className,
  placeholder,
  align,
  side,
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

      <RadixPopover.Content
        align={align}
        side={side}
        className="PopoverContent border-none p-2"
        sideOffset={5}
        {...rest}
      >
        <div className={cn('text-sm font-normal text-gray-500', className)}>
          {placeholder}
        </div>
        {children}
      </RadixPopover.Content>
    </RadixPopover.Root>
  )
}

Popover.displayName = 'Popover'

export default Popover
