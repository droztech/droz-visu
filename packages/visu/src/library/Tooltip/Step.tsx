import * as RadixPopover from '@radix-ui/react-popover'
import { Position } from '@types'
import { clsx } from 'clsx'
import { ArrowRight, X } from 'phosphor-react'
import { FC, HTMLAttributes, useState } from 'react'

export interface TooltipStepProps extends HTMLAttributes<HTMLDivElement> {
  closeText?: string
  defaultOpen?: boolean
  nextText?: string
  side?: Position
  stepText?: string
  text: string[]
}

const TooltipStep: FC<TooltipStepProps> = ({
  children,
  className,
  closeText,
  defaultOpen,
  nextText,
  side,
  stepText,
  text,
  ...rest
}) => {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <RadixPopover.Root defaultOpen={defaultOpen}>
      <RadixPopover.Trigger asChild>{children}</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          side={side}
          sideOffset={16}
          className="bg-background shadow-sm rounded-md p-6 max-w-xs flex flex-col gap-4 items-center"
        >
          <span className={clsx([className, 'text-sm w-full'])} {...rest}>
            {text[currentStep - 1]}
          </span>
          <div className="flex justify-between items-center w-full gap-6">
            <span className="text-gray-500 text-sm">
              {stepText} {currentStep}/{text.length}
            </span>
            {currentStep === text.length ? (
              <RadixPopover.Close
                onClick={() => setCurrentStep(1)}
                className="bg-gray-300 text-sm rounded-full px-4 py-1 flex gap-2 items-center justify-center text-primary hover:bg-primary hover:text-gray-100 active:bg-primary-500 active:text-gray-100 transition-all"
              >
                {closeText}
                <X size={16} />
              </RadixPopover.Close>
            ) : (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="bg-gray-300 text-sm rounded-full px-4 py-1 flex gap-2 items-center justify-center text-primary hover:bg-primary hover:text-gray-100 active:bg-primary-500 active:text-gray-100 transition-all"
              >
                {nextText}
                <ArrowRight size={16} />
              </button>
            )}
          </div>
          <RadixPopover.Arrow className="fill-gray-100 w-5 h-2" />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}

export default TooltipStep
