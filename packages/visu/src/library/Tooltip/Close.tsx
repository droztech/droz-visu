import * as RadixTooltip from '@radix-ui/react-tooltip'
import clsx from 'clsx'
import { X } from 'phosphor-react'
import { FC, HTMLAttributes, useState } from 'react'

export interface TooltipCloseProps extends HTMLAttributes<HTMLDivElement> {
  side?: 'top' | 'right' | 'bottom' | 'left' | undefined
  text: string
}

const TooltipClose: FC<TooltipCloseProps> = ({
  side,
  text,
  children,
  className,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false)

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
              <div className="bg-background shadow-sm rounded-md p-6 max-w-xs flex gap-2 items-center">
                <span className={clsx('text-sm flex-1', className)} {...rest}>
                  {text}
                </span>
                <button
                  className="bg-gray-300 rounded-full flex items-center justify-center h-6 w-6 text-primary hover:bg-primary hover:text-gray-100 active:bg-primary-500 active:text-gray-100 transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={12} />
                </button>
              </div>
            </RadixTooltip.Content>
          </RadixTooltip.Portal>
        </RadixTooltip.Root>
      </RadixTooltip.Provider>
    </>
  )
}

export default TooltipClose
