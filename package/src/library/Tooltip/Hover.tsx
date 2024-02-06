import * as RadixTooltip from '@radix-ui/react-tooltip'
import { Position } from '@types'
import { FC, HTMLAttributes, ReactNode, useCallback, useState } from 'react'
import { cn } from '@/src/utils/class-merge.helper'

export interface TooltipHoverProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'content'> {
  // Optional because we can't remove `text` until the next major release
  content?: ReactNode
  defaultOpen?: boolean
  closeTime?: number
  delayDuration?: number
  open?: boolean
  side?: Position
  onOpenChange?: (open: boolean) => void
  /**
   * @deprecated Use `content` instead. Will be removed in the next major release
   */
  text?: string
}

const TooltipHover: FC<TooltipHoverProps> = ({
  children,
  className,
  content,
  closeTime,
  defaultOpen,
  delayDuration,
  open,
  onOpenChange,
  side,
  text,
  ...rest
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(open)

  const handleOpenChange = useCallback(
    (isOpen: boolean) => {
      if (!isOpen && closeTime) {
        setTimeout(() => {
          setTooltipOpen(false)
          if (onOpenChange) onOpenChange(false)
        }, closeTime)
      } else {
        setTooltipOpen(isOpen)
        if (onOpenChange) onOpenChange(isOpen)
      }
    },
    [closeTime, onOpenChange],
  )

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root
        defaultOpen={defaultOpen}
        delayDuration={delayDuration}
        open={tooltipOpen}
        onOpenChange={(value) => handleOpenChange(value)}
      >
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side={side}
            sideOffset={5}
            className="z-100 max-h-[--radix-tooltip-content-available-height] max-w-[--radix-tooltip-content-available-width]"
          >
            <RadixTooltip.Arrow className="h-2 w-5 fill-background" />
            <div className={cn('max-w-xs rounded-md bg-background p-3 text-sm shadow-sm', className)} {...rest}>
              {content || text}
            </div>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

TooltipHover.displayName = 'Tooltip.Hover'

export default TooltipHover