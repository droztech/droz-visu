import { FC, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface DialogBodyProps extends HTMLAttributes<HTMLDivElement> {}

const DialogBody: FC<DialogBodyProps> = ({ className, ...rest }) => {
  return <div className={twMerge('max-h-[60vh] overflow-auto p-6', className)} {...rest} />
}

DialogBody.displayName = 'Dialog.Body'

export default DialogBody
