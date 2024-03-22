import * as RadixPopover from '@radix-ui/react-popover'
import { FC } from 'react'

export interface PopoverTriggerProps extends RadixPopover.PopoverTriggerProps {}

const PopoverTrigger: FC<PopoverTriggerProps> = ({ children, ...rest }) => {
  return <RadixPopover.Trigger {...rest}>{children}</RadixPopover.Trigger>
}

PopoverTrigger.displayName = 'Popover.Trigger'

export default PopoverTrigger
