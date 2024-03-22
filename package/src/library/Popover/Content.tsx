import { cn } from '@/src/utils/class-merge.helper'

import * as RadixPopover from '@radix-ui/react-popover'
import { FC } from 'react'

export interface PopoverContentProps extends RadixPopover.PopoverContentProps {}

const PopoverContent: FC<PopoverContentProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <RadixPopover.Portal>
      <RadixPopover.Content
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
