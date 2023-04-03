import * as RadixPopover from '@radix-ui/react-popover'
import { clsx } from 'clsx'
import { X } from 'phosphor-react'
import { FC, HTMLAttributes } from 'react'

export interface TooltipCloseProps extends HTMLAttributes<HTMLDivElement> {
  side?: 'top' | 'right' | 'bottom' | 'left' | undefined
  text: string
  defaultOpen?: boolean
}

const TooltipClose: FC<TooltipCloseProps> = ({
  side,
  text,
  defaultOpen,
  children,
  className,
  ...rest
}) => {
  return (
    <RadixPopover.Root defaultOpen={defaultOpen}>
      <RadixPopover.Trigger asChild>{children}</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          side={side}
          sideOffset={16}
          className="bg-gray-100 shadow-sm rounded-md p-6 max-w-xs flex gap-4 items-center"
        >
          <span className={clsx('text-sm flex-1', className)} {...rest}>
            {text}
          </span>
          <RadixPopover.Close className="bg-gray-300 rounded-full flex items-center justify-center h-6 w-6 text-primary hover:bg-primary hover:text-gray-100 active:bg-primary-500 active:text-gray-100 transition-all">
            <X size={16} />
          </RadixPopover.Close>
          <RadixPopover.Arrow className="fill-gray-100 w-5 h-2" />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}

export default TooltipClose
