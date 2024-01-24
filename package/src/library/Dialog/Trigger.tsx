import * as Dialog from '@radix-ui/react-dialog'
import { FC } from 'react'

export interface DialogTriggerProps extends Dialog.DialogTriggerProps {}

const DialogTrigger: FC<DialogTriggerProps> = ({ asChild = true, children, ...rest }) => {
  return (
    <Dialog.Trigger asChild={asChild} {...rest}>
      {children}
    </Dialog.Trigger>
  )
}

DialogTrigger.displayName = 'Dialog.Trigger'

export default DialogTrigger
