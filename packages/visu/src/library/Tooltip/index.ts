import TooltipClose from './Close'
import TooltipHover from './Hover'
import TooltipStep from './Step'
import TooltipTime from './Time'

export type { TooltipCloseProps } from './Close'
export type { TooltipHoverProps } from './Hover'
export type { TooltipStepProps } from './Step'
export type { TooltipTimeProps } from './Time'

const Tooltip = {
  Close: TooltipClose,
  Hover: TooltipHover,
  Step: TooltipStep,
  Time: TooltipTime,
}

export default Tooltip
