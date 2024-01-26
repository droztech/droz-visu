import { FC, HTMLAttributes } from 'react'
import { cn } from '@/src/utils/class-merge.helper'

export interface DialogBodyProps extends HTMLAttributes<HTMLDivElement> {}

const DialogBody: FC<DialogBodyProps> = ({ className, ...rest }) => {
  return <div className={cn('max-h-[60vh] overflow-auto p-6', className)} {...rest} />
}

DialogBody.displayName = 'Dialog.Body'

export default DialogBody
