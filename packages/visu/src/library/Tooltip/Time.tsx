import * as RadixPopover from '@radix-ui/react-popover'
import { Position } from '@types'
import { clsx } from 'clsx'
import { FC, HTMLAttributes, ReactNode, useEffect, useState } from 'react'

export interface TooltipTimeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'content'> {
  content?: ReactNode
  duration: number
  side?: Position
}

const TooltipTime: FC<TooltipTimeProps> = ({ children, className, content, duration, side, ...rest }) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(true)

    const timeoutId = setTimeout(() => {
      setOpen(false)
    }, duration)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [duration])

  return (
    <RadixPopover.Root open={open}>
      <RadixPopover.Trigger asChild>{children}</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          side={side}
          sideOffset={16}
          className="flex max-w-xs items-center gap-4 rounded-md bg-gray-100 p-6 shadow-sm"
          {...rest}
        >
          <span className={clsx([className, 'flex-1 text-sm'])}>{content}</span>
          <RadixPopover.Arrow className="h-2 w-5 fill-gray-100" />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  )
}

TooltipTime.displayName = 'Tooltip.Time'

export default TooltipTime
