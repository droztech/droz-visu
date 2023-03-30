import * as RadixTooltip from '@radix-ui/react-tooltip'
import clsx from 'clsx'
import { X } from 'phosphor-react'
import { FC, HTMLAttributes, useMemo, useState } from 'react'

export interface TooltipRootProps extends HTMLAttributes<HTMLDivElement> {
  side?: 'top' | 'right' | 'bottom' | 'left' | undefined
  text: string | string[]
  trigger?: 'click' | 'hover'
  variant?: 'text' | 'close' | 'steps'
}

const TooltipRoot: FC<TooltipRootProps> = ({
  side,
  text,
  trigger = 'hover',
  variant = 'text',
  children,
  className,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

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
      <RadixTooltip.Provider {...rest}>
        <RadixTooltip.Root open={open}>
          <RadixTooltip.Trigger
            className="z-10"
            asChild
            onClick={() => setIsOpen(!isOpen)}
          >
            {children}
          </RadixTooltip.Trigger>
          <RadixTooltip.Portal>
            <RadixTooltip.Content
              side={side}
              sideOffset={5}
              className="max-w-xs"
            >
              <RadixTooltip.Arrow className="fill-background w-5 h-2" />
              <div className="bg-background shadow-sm rounded-md p-6 flex gap-4 items-center">
                <span className={clsx('flex-1 text-sm', className)} {...rest}>
                  {Array.isArray(text) ? text[currentStep] : text}
                </span>
                {variant === 'close' && (
                  <button
                    className="bg-gray-300 rounded-full flex items-center justify-center h-6 w-6 text-primary hover:bg-primary hover:text-gray-100 active:bg-primary-500 active:text-gray-100 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    <X size={12} />
                  </button>
                )}
              </div>
            </RadixTooltip.Content>
          </RadixTooltip.Portal>
        </RadixTooltip.Root>
      </RadixTooltip.Provider>
    </>
  )
}

export default TooltipRoot
