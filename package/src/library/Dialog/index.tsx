import DialogBody from './Body'
import DialogContent from './Content'
import DialogFooter from './Footer'
import DialogHeader from './Header'
import DialogRoot from './Root'
import DialogTrigger from './Trigger'
import { Close } from '@radix-ui/react-dialog'

export type { DialogBodyProps } from './Body'
export type { DialogCloseProps } from '@radix-ui/react-dialog'
export type { DialogContentProps } from './Content'
export type { DialogFooterProps } from './Footer'
export type { DialogHeaderProps } from './Header'
export type { DialogRootProps } from './Root'
export type { DialogTriggerProps } from './Trigger'

const Modal = {
  Body: DialogBody,
  Close,
  Content: DialogContent,
  Footer: DialogFooter,
  Header: DialogHeader,
  Root: DialogRoot,
  Trigger: DialogTrigger,
}

export default Modal
