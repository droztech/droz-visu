import * as RadixTooltip from '@radix-ui/react-tooltip'
import clsx from 'clsx'
import { ArrowCounterClockwise, ArrowRight, X } from 'phosphor-react'
import { FC, HTMLAttributes, useCallback, useMemo, useState } from 'react'

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

  const handleClose = useCallback(() => {
    setCurrentStep(1)
    setIsOpen(false)
  }, [])

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
              <div className="bg-background shadow-sm rounded-md p-6 max-w-xs flex flex-col gap-4 items-center">
                <span className={clsx('text-sm', className)} {...rest}>
                  {text[currentStep - 1]}
                </span>
                <div className="flex justify-between items-center w-full gap-2">
                  <span className="text-gray-500 text-sm">
                    Step {currentStep}/{text.length}
                  </span>
                  {currentStep === text.length ? (
                    <button
                      className="bg-gray-300 rounded-full flex items-center justify-center h-6 w-6 text-primary hover:bg-primary hover:text-gray-100 active:bg-primary-500 active:text-gray-100 transition-all"
                      onClick={handleClose}
                    >
                      {trigger === 'click' ? (
                        <X size={12} />
                      ) : (
                        <ArrowCounterClockwise size={12} />
                      )}
                    </button>
                  ) : (
                    <button
                      className="bg-gray-300 text-sm rounded-full px-4 py-1 flex gap-2 items-center justify-center text-primary hover:bg-primary hover:text-gray-100 active:bg-primary-500 active:text-gray-100 transition-all"
                      onClick={() => setCurrentStep(currentStep + 1)}
                    >
                      Next
                      <ArrowRight size={12} />
                    </button>
                  )}
                </div>
              </div>
            </RadixTooltip.Content>
          </RadixTooltip.Portal>
        </RadixTooltip.Root>
      </RadixTooltip.Provider>
    </>
  )
}

export default TooltipStep
