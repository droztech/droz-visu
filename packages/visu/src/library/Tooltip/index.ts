import TooltipClose from './Close'
import TooltipHover from './Hover'
import TooltipStep from './Step'

export type { TooltipHoverProps } from './Hover'
export type { TooltipCloseProps } from './Close'
export type { TooltipStepProps } from './Step'

const Tooltip = {
  Hover: TooltipHover,
  Close: TooltipClose,
  Step: TooltipStep,
}

export default Tooltip
