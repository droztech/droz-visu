import * as Dialog from '@radix-ui/react-dialog'
import { FC } from 'react'

export interface DialogRootProps extends Dialog.DialogProps {}

const DialogRoot: FC<DialogRootProps> = ({ children, ...rest }) => {
  return <Dialog.Root {...rest}>{children}</Dialog.Root>
}

DialogRoot.displayName = 'Dialog.Root'

export default DialogRoot
