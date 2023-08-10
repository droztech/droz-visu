import * as RadixTooltip from '@radix-ui/react-tooltip'
import { Position } from '@types'
import { clsx } from 'clsx'
import { FC, HTMLAttributes, ReactNode } from 'react'

export interface TooltipHoverProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'content'> {
  // Optional because we can't remove `text` until the next major release
  content?: ReactNode
  side?: Position
  /**
   * @deprecated Use `content` instead. Will be removed in the next major release
   */
  text?: string
}

const TooltipHover: FC<TooltipHoverProps> = ({
  children,
  className,
  content,
  side,
  text,
  ...rest
}) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger className="z-10" asChild>
          {children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal className="hidden">
          <RadixTooltip.Content side={side} sideOffset={5}>
            <RadixTooltip.Arrow className="h-2 w-5 fill-background" />
            <div className="max-w-xs rounded-md bg-background p-3 shadow-sm">
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

TooltipHover.displayName = 'Tooltip.Hover'

export default TooltipHover
