import { Icon } from '../index'

import { cn } from '@/src/utils/class-merge.helper'

import { X } from '@phosphor-icons/react'
import { Close } from '@radix-ui/react-dialog'
import { FC, HTMLAttributes, ReactNode } from 'react'

export interface DialogHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  closeIcon?: ReactNode
  title: string
  titleIcon?: ReactNode
  withClose?: boolean
}

const DialogHeader: FC<DialogHeaderProps> = ({
  className,
  closeIcon = <X />,
  title,
  titleIcon,
  withClose = true,
  ...rest
}) => {
  return (
    <div
      className={cn(
        'flex min-h-16 items-center justify-between gap-6 border-b border-gray-300 px-6 py-4',
        className,
      )}
      {...rest}
    >
      <div className="flex items-center gap-2">
        {titleIcon && (
          <span className="[&_*]:text-lg [&_*]:text-primary">{titleIcon}</span>
        )}
        <span className="text-md font-normal text-gray-900">{title}</span>
      </div>
      {withClose && (
        <Close>
          <Icon size="sm">{closeIcon}</Icon>
        </Close>
      )}
    </div>
  )
}

DialogHeader.displayName = 'Dialog.Header'

export default DialogHeader
