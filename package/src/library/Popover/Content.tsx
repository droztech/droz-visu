import { cn } from '@/src/utils/class-merge.helper'
import { Position } from '@types'

import * as RadixPopover from '@radix-ui/react-popover'
import { FC } from 'react'

export interface PopoverContentProps extends RadixPopover.PopoverContentProps {
  className?: string
  align?: 'start' | 'end' | 'center'
  side?: Position
}

const PopoverContent: FC<PopoverContentProps> = ({
  children,
  className,
  align,
  side,
  ...rest
}) => {
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
        align={align}
        side={side}
        className={cn(
          'z-100 rounded-lg border-none bg-primary-200 p-3',
          className,
        )}
        sideOffset={5}
        {...rest}
      >
        <div className="bg-background-200">{children}</div>
      </RadixPopover.Content>
    </RadixPopover.Portal>
  )
}

PopoverContent.displayName = 'Popover.Content'

export default PopoverContent
