import { cn } from '@/src/utils/class-merge.helper'
import { Position } from '@types'

import * as RadixPopover from '@radix-ui/react-popover'
import { X } from 'phosphor-react'
import { FC, HTMLAttributes, ReactNode, useCallback, useState } from 'react'

export interface TooltipCloseProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'content'> {
  content?: ReactNode
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  side?: Position
  closeTime?: number
  closeButton?: boolean
}

const TooltipClose: FC<TooltipCloseProps> = ({
  children,
  className,
  content,
  defaultOpen,
  side,
  closeTime,
  open,
  onOpenChange,
  closeButton = true,
  ...rest
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(open)

  const handleOpenChange = useCallback(
    (isOpen: boolean) => {
      setTooltipOpen(isOpen)
      if (onOpenChange) onOpenChange(isOpen)

      if (isOpen && closeTime) {
        setTimeout(() => {
          setTooltipOpen(false)
          if (onOpenChange) onOpenChange(false)
        }, closeTime)
      }
    },
    [closeTime, onOpenChange],
  )

  return (
    <RadixPopover.Root
      onOpenChange={handleOpenChange}
      defaultOpen={defaultOpen}
      open={tooltipOpen}
    >
      <RadixPopover.Trigger asChild>{children}</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          side={side}
          sideOffset={16}
          className="z-100 flex max-h-[--radix-tooltip-content-available-height] max-w-[--radix-tooltip-content-available-width] focus:outline-none"
        >
          <div
            className={cn(
              'flex max-w-xs gap-2 rounded-md bg-background p-3 text-sm shadow-sm',
              className,
            )}
            {...rest}
          >
            <div>{content}</div>
            {closeButton && (
              <div className="flex-1">
                <RadixPopover.Close className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-primary transition-all hover:bg-primary hover:text-gray-100 active:bg-primary-500 active:text-gray-100">
                  <X size={16} />
                </RadixPopover.Close>
              </div>
            )}
          </div>
          <RadixPopover.Arrow className="h-2 w-5 fill-gray-100" />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}

TooltipClose.displayName = 'Tooltip.Close'

export default TooltipClose
