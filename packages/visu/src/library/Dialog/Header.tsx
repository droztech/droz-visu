import { Icon } from '../index'
import { Close } from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { FC, HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

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
      className={twMerge(
        'flex items-center justify-between border-b border-gray-300 px-6 py-4',
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
        <Close asChild data-testid="visu-dialog-header-close">
          <Icon size="sm">{closeIcon}</Icon>
        </Close>
      )}
    </div>
  )
}

DialogHeader.displayName = 'Dialog.Header'

export default DialogHeader
