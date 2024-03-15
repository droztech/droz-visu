import { cn } from '@/src/utils/class-merge.helper'

import { FC, HTMLAttributes } from 'react'

export interface FormGroupProps extends HTMLAttributes<HTMLLabelElement> {}

const FormGroup: FC<FormGroupProps> = ({ className, children, ...rest }) => {
  return (
    <label className={cn('flex flex-col gap-2', className)} {...rest}>
      {children}
    </label>
  )
}

FormGroup.displayName = 'FormGroup'

export default FormGroup
