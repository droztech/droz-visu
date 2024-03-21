import * as RadixPopover from '@radix-ui/react-popover'
import { FC } from 'react'

export interface PopoverRootProps extends RadixPopover.PopoverProps {}

const PopoverRoot: FC<PopoverRootProps> = ({ children, ...rest }) => {
  return <RadixPopover.Root {...rest}>{children}</RadixPopover.Root>
}

PopoverRoot.displayName = 'Popover.Root'

export default PopoverRoot
