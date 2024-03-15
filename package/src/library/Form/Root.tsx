import { cn } from '@/src/utils/class-merge.helper'

import { FC, FormHTMLAttributes } from 'react'

export interface FormRootProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, 'handleSubmit'> {
  onSubmit?: (data: any) => void
}

const FormRoot: FC<FormRootProps> = ({ children, className, ...rest }) => {
  return (
    <form className={cn('flex flex-col gap-4 text-left', className)} {...rest}>
      {children}
    </form>
  )
}

FormRoot.displayName = 'FormRoot'

export default FormRoot
