import * as RadixTooltip from '@radix-ui/react-tooltip'
import { Position } from '@types'
import { clsx } from 'clsx'
import { FC, HTMLAttributes, ReactNode, useCallback, useEffect, useState } from 'react'

export interface TooltipTimeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'content'> {
  // Optional because we can't remove `text` until the next major release
  content?: ReactNode
  defaultOpen?: boolean
  open?: boolean
  side?: Position
  closeTime?: number

  onOpenChange?: (open: boolean) => void
  /**
   * @deprecated Use `content` instead. Will be removed in the next major release
   */
  text?: string
}

const TooltipTime: FC<TooltipTimeProps> = ({
  children,
  className,
  content,
  defaultOpen = false,
  open = false,
  onOpenChange,
  closeTime,
  side,
  text,
  ...rest
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(open)

  const handleOpenChange = useCallback(
    (value: boolean) => {
      setTooltipOpen(value)
      if (onOpenChange) onOpenChange(value)

      if (value && closeTime) {
        setTimeout(() => {
          setTooltipOpen(false)
          if (onOpenChange) onOpenChange(false)
        }, closeTime)
      }
    },
    [onOpenChange, closeTime],
  )

  useEffect(() => {
    setTooltipOpen(open)
  }, [open])

  const handleTooltipClick = () => {
    handleOpenChange(!tooltipOpen)
  }

  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root defaultOpen={defaultOpen} open={tooltipOpen}>
        <RadixTooltip.Trigger className="z-10" asChild onClick={handleTooltipClick}>
          {children}
        </RadixTooltip.Trigger>

        <RadixTooltip.Portal>
          <RadixTooltip.Content side={side} sideOffset={5}>
            <RadixTooltip.Arrow className="h-2 w-5 fill-background" />
            <div className="max-w-xs rounded-md border-none bg-background p-3 shadow-sm">
              <span className={clsx([className, 'text-sm'])} {...rest}>
                {content || text}
              </span>
            </div>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

TooltipTime.displayName = 'Tooltip.Time'

export default TooltipTime
