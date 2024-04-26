import DrawerBody from './Body'
import DrawerClose from './Close'
import DrawerContent from './Content'
import DrawerFooter from './Footer'
import DrawerHeader from './Header'
import DrawerOverlay from './Overlay'
import DrawerPortal from './Portal'
import DrawerRoot from './Root'
import DrawerTitle from './Title'
import DrawerTrigger from './Trigger'

export type * from './Close'
export type * from './Content'
export type * from './Footer'
export type * from './Header'
export type * from './Overlay'
export type * from './Portal'
export type * from './Root'
export type * from './Title'
export type * from './Trigger'
export type * from './Body'

const Drawer = {
  Close: DrawerClose,
  Content: DrawerContent,
  Footer: DrawerFooter,
  Header: DrawerHeader,
  Overlay: DrawerOverlay,
  Portal: DrawerPortal,
  Root: DrawerRoot,
  Title: DrawerTitle,
  Trigger: DrawerTrigger,
  Body: DrawerBody,
}

export default Drawer
