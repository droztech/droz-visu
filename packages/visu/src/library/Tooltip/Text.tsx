import * as RadixTooltip from '@radix-ui/react-tooltip'
import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface TooltipTextProps extends HTMLAttributes<HTMLDivElement> {
  side?: 'top' | 'right' | 'bottom' | 'left' | undefined
  text: string
}

const TooltipText: FC<TooltipTextProps> = ({
  side,
  text,
  children,
  className,
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
              <span className={clsx('text-sm', className)} {...rest}>
                {text}
              </span>
            </div>
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

export default TooltipText
