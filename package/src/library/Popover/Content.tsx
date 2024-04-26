import { cn } from '@/src/utils/class-merge.helper'

import * as RadixPopover from '@radix-ui/react-popover'
import { FC } from 'react'

export interface PopoverContentProps extends RadixPopover.PopoverContentProps {
  autoSize?: boolean
}

const PopoverContent: FC<PopoverContentProps> = ({
  className,
  autoSize,
  ...rest
}) => {
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
        className={cn(
          'z-100',
          autoSize && 'w-[--radix-popover-trigger-width]',
          className,
        )}
        sideOffset={5}
        {...rest}
      />
    </RadixPopover.Portal>
  )
}

PopoverContent.displayName = 'Popover.Content'

export default PopoverContent
