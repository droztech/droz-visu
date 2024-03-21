import { cn } from '@/src/utils/class-merge.helper'
import { Position } from '@types'

import * as RadixPopover from '@radix-ui/react-popover'
import { FC, ReactNode } from 'react'

export interface PopoverProps extends RadixPopover.PopoverProps {
  className?: string
  icon: ReactNode
  align?: 'start' | 'end' | 'center'
  side?: Position
}

const Popover: FC<PopoverProps> = ({
  icon,
  children,
  className,
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
          className={cn('rounded-lg border-none bg-primary-200 p-3', className)}
          sideOffset={5}
          {...rest}
        >
          <div className="bg-background-200">{children}</div>
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}

Popover.displayName = 'Popover'

export default Popover