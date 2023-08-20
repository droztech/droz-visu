import DialogBody from './Body'
import DialogContent from './Content'
import DialogFooter from './Footer'
import DialogHeader from './Header'
import DialogRoot from './Root'
import DialogTrigger from './Trigger'
import { Close } from '@radix-ui/react-dialog'

export type { DialogBodyProps as BodyProps } from './Body'
export type { DialogContentProps as ContentProps } from './Content'
export type { Close as CloseProps } from '@radix-ui/react-dialog'
export type { DialogFooterProps as FooterProps } from './Footer'
export type { DialogHeaderProps as HeaderProps } from './Header'
export type { DialogRootProps as RootProps } from './Root'
export type { DialogTriggerProps as TriggerProps } from './Trigger'

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
