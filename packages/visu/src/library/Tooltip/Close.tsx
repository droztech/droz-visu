import * as RadixPopover from '@radix-ui/react-popover'
import { Position } from '@types'
import { clsx } from 'clsx'
import { X } from 'phosphor-react'
import { FC, HTMLAttributes, ReactNode } from 'react'

export interface TooltipCloseProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'content'> {
  // Optional because we can't remove `text` until the next major release
  content?: ReactNode
  defaultOpen?: boolean
  side?: Position
  /**
   * @deprecated Use `content` instead. Will be removed in the next major release
   */
  text?: string
}

const TooltipClose: FC<TooltipCloseProps> = ({
  children,
  className,
  content,
  defaultOpen,
  side,
  text,
  ...rest
}) => {
  return (
    <RadixPopover.Root defaultOpen={defaultOpen}>
      <RadixPopover.Trigger asChild>{children}</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          side={side}
          sideOffset={16}
          className="flex max-w-xs items-center gap-4 rounded-md bg-gray-100 p-6 shadow-sm"
        >
          <span className={clsx([className, 'flex-1 text-sm'])} {...rest}>
            {content || text}
          </span>
          <RadixPopover.Close
            className={clsx(
              'flex h-6 w-6 items-center justify-center rounded-full bg-gray-300 text-primary transition-all',
              'hover:bg-primary hover:text-gray-100 active:bg-primary-500 active:text-gray-100',
            )}
          >
            <X size={16} />
          </RadixPopover.Close>
          <RadixPopover.Arrow className="h-2 w-5 fill-gray-100" />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}

TooltipClose.displayName = 'Tooltip.Close'

export default TooltipClose
