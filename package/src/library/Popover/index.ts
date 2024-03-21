import PopoverContent from './Content'
import PopoverRoot from './Root'
import PopoverTrigger from './Trigger'

export type { PopoverRootProps } from './Root'
export type { PopoverTriggerProps } from './Trigger'
export type { PopoverContentProps } from './Content'

const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Content: PopoverContent,
}

export default Popover
