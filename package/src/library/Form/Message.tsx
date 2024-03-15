import { cn } from '@/src/utils/class-merge.helper'
import { Status, StatusClass } from '@types'

import { FC, HTMLAttributes } from 'react'

const statusVariant: StatusClass = {
  alert: 'text-alert',
  error: 'text-error',
  success: 'text-success',
}

export interface FormMessageProps extends HTMLAttributes<HTMLDivElement> {
  status?: Status
  isHidden?: boolean
}

const FormMessage: FC<FormMessageProps> = ({
  status = 'error',
  isHidden,
  children,
  className,
  ...rest
}) => {
  return (
    !isHidden &&
    children && (
      <span
        className={cn(
          'flex items-end gap-2 text-xs',
          statusVariant[status],
          className,
        )}
        {...rest}
      >
        {children}
      </span>
    )
  )
}

FormMessage.displayName = 'FormMessage'

export default FormMessage
