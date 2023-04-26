import * as RadixTooltip from '@radix-ui/react-tooltip'
import { Position } from '@types'
import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface TooltipHoverProps extends HTMLAttributes<HTMLDivElement> {
  side?: Position
  text: string
}

const TooltipHover: FC<TooltipHoverProps> = ({
  children,
  className,
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
            <RadixTooltip.Arrow className="fill-background w-5 h-2" />
            <div className="bg-background shadow-sm rounded-md p-3 max-w-xs">
              <span className={clsx([className, 'text-sm'])} {...rest}>
                {text}
              </span>
            </div>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

export default TooltipHover
