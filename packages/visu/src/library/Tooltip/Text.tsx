import * as RadixTooltip from '@radix-ui/react-tooltip'
import clsx from 'clsx'
import { FC, HTMLAttributes, useMemo, useState } from 'react'

export interface TooltipTextProps extends HTMLAttributes<HTMLDivElement> {
  side?: 'top' | 'right' | 'bottom' | 'left' | undefined
  text: string
  trigger?: 'click' | 'hover'
}

const TooltipText: FC<TooltipTextProps> = ({
  side,
  text,
  trigger = 'hover',
  children,
  className,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = useMemo(
    () => (trigger === 'click' ? isOpen : undefined),
    [trigger, isOpen]
  )

  return (
    <>
      {open && (
        <div
          className="fixed h-screen w-screen top-0 left-0"
          onClick={() => setIsOpen(false)}
        />
      )}
      <RadixTooltip.Provider>
        <RadixTooltip.Root open={open}>
          <RadixTooltip.Trigger
            className="z-10"
            asChild
            onClick={() => setIsOpen(!isOpen)}
          >
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
    </>
  )
}

export default TooltipText
