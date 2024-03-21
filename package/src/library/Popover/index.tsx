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
      <RadixPopover.Portal>
        <RadixPopover.Content
          align={align}
          side={side}
          className="rounded-lg border-none bg-primary-200 p-3"
          sideOffset={5}
          {...rest}
        >
          <div className="bg-background-200">
            <div
              className={cn(
                'pb-4 pt-2 text-center text-sm font-normal text-gray-500',
                className,
              )}
            >
              {placeholder}
            </div>
            {children}
          </div>
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}

Popover.displayName = 'Popover'

export default Popover
