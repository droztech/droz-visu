import { cn } from '@/src/utils/class-merge.helper'
import { Position } from '@types'

import * as RadixPopover from '@radix-ui/react-popover'
import { ArrowRight, X } from 'phosphor-react'
import { FC, HTMLAttributes, ReactNode, useMemo, useState } from 'react'

export interface TooltipStepProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'content'> {
  closeText?: string
  // Optional because we can't remove `text` until the next major release
  content?: ReactNode[]
  defaultOpen?: boolean
  nextText?: string
  side?: Position
  stepText?: string
  /**
   * @deprecated Use `content` instead. Will be removed in the next major release
   */
  text?: string[]
}

const TooltipStep: FC<TooltipStepProps> = ({
  children,
  className,
  closeText,
  content,
  defaultOpen,
  nextText,
  side,
  stepText,
  text,
  ...rest
}) => {
  const [currentStep, setCurrentStep] = useState(1)

  const currentLength = useMemo(() => {
    if (content?.length) {
      return content.length
    }
    if (text?.length) {
      return text.length
    }

    return 0
  }, [content?.length, text?.length])

  const currentlyShownItem = useMemo(() => {
    if (content?.length) {
      return content[currentStep - 1]
    }
    if (text?.length) {
      return text[currentStep - 1]
    }

    return ''
  }, [content, currentStep, text])

  return (
    <RadixPopover.Root defaultOpen={defaultOpen}>
      <RadixPopover.Trigger asChild>{children}</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          side={side}
          sideOffset={16}
          className="flex max-w-xs flex-col items-center gap-4 rounded-md bg-background p-6 shadow-sm"
        >
          <span className={cn('w-full text-sm', className)} {...rest}>
            {currentlyShownItem}
          </span>
          <div className="flex w-full items-center justify-between gap-6">
            <span className="text-sm text-gray-500">
              {stepText} {currentStep}/{currentLength}
            </span>
            {currentStep === currentLength ? (
              <RadixPopover.Close
                onClick={() => setCurrentStep(1)}
                className="flex items-center justify-center gap-2 rounded-full bg-gray-300 px-4 py-1 text-sm text-primary transition-all hover:bg-primary hover:text-gray-100 active:bg-primary-500 active:text-gray-100"
              >
                {closeText}
                <X size={16} />
              </RadixPopover.Close>
            ) : (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className={cn(
                  'flex items-center justify-center gap-2 rounded-full bg-gray-300 px-4 py-1 text-sm text-primary transition-all hover:bg-primary hover:text-gray-100 active:bg-primary-500 active:text-gray-100',
                )}
              >
                {nextText}
                <ArrowRight size={16} />
              </button>
            )}
          </div>
          <RadixPopover.Arrow className="h-2 w-5 fill-gray-100" />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}

TooltipStep.displayName = 'Tooltip.Step'

export default TooltipStep
