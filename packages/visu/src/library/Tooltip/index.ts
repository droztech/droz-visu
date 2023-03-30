import TooltipClose from './Close'
import TooltipStep from './Step'
import TooltipText from './Text'

export type { TooltipTextProps } from './Text'
export type { TooltipCloseProps } from './Close'
export type { TooltipStepProps } from './Step'

const Tooltip = {
  Text: TooltipText,
  Close: TooltipClose,
  Step: TooltipStep,
}

export default Tooltip
