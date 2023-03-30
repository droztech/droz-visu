import * as RadixTooltip from '@radix-ui/react-tooltip'
import clsx from 'clsx'
import { ArrowRight } from 'phosphor-react'
import { FC, HTMLAttributes, useMemo, useState } from 'react'

export interface TooltipStepProps extends HTMLAttributes<HTMLDivElement> {
  side?: 'top' | 'right' | 'bottom' | 'left' | undefined
  text: string[]
  trigger?: 'click' | 'hover'
}

const TooltipStep: FC<TooltipStepProps> = ({
  side,
  text,
  trigger = 'hover',
  children,
  className,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

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
                  {text[currentStep - 1]}
                </span>
                <button
                  className="bg-gray-300 rounded-full flex items-center justify-center h-6 w-6 text-primary hover:bg-primary hover:text-gray-100 active:bg-primary-500 active:text-gray-100 transition-all"
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  <ArrowRight size={12} />
                </button>
              </div>
            </RadixTooltip.Content>
          </RadixTooltip.Portal>
        </RadixTooltip.Root>
      </RadixTooltip.Provider>
    </>
  )
}

export default TooltipStep
