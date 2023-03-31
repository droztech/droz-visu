import * as RadixTooltip from '@radix-ui/react-tooltip'
import { clsx } from 'clsx'
import { ArrowRight, X } from 'phosphor-react'
import { FC, HTMLAttributes, useCallback, useState } from 'react'

export interface TooltipStepProps extends HTMLAttributes<HTMLDivElement> {
  side?: 'top' | 'right' | 'bottom' | 'left' | undefined
  text: string[]
  nextText?: string
  stepText?: string
  defaultOpen?: boolean
}

const TooltipStep: FC<TooltipStepProps> = ({
  side,
  text,
  nextText,
  stepText,
  defaultOpen,
  children,
  className,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const [currentStep, setCurrentStep] = useState(1)

  const handleClose = useCallback(() => {
    setCurrentStep(1)
    setIsOpen(false)
  }, [])

  return (
    <>
      {isOpen && (
        <div
          className="fixed h-screen w-screen top-0 left-0"
          onClick={() => setIsOpen(false)}
        />
      )}
      <RadixTooltip.Provider>
        <RadixTooltip.Root open={isOpen}>
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
                <span className={clsx('text-sm w-full', className)} {...rest}>
                  {text[currentStep - 1]}
                </span>
                <div className="flex justify-between items-center w-full gap-6">
                  <span className="text-gray-500 text-sm">
                    {stepText} {currentStep}/{text.length}
                  </span>
                  {currentStep === text.length ? (
                    <button
                      className="bg-gray-300 rounded-full flex items-center justify-center px-4 py-1 text-primary hover:bg-primary hover:text-gray-100 active:bg-primary-500 active:text-gray-100 transition-all"
                      onClick={handleClose}
                    >
                      <X size={12} />
                    </button>
                  ) : (
                    <button
                      className="bg-gray-300 text-sm rounded-full px-4 py-1 flex gap-2 items-center justify-center text-primary hover:bg-primary hover:text-gray-100 active:bg-primary-500 active:text-gray-100 transition-all"
                      onClick={() => setCurrentStep(currentStep + 1)}
                    >
                      {nextText}
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
