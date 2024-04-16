import { cn } from '@/src/utils/class-merge.helper'

import { FC, HTMLAttributes } from 'react'

export interface ChipIconProps extends HTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element
}

const ChipIcon: FC<ChipIconProps> = ({ className, icon, ...rest }) => {
  return (
    <button
      className={cn(
        'rounded-full p-0.5 transition-all hover:bg-primary-300',
        className,
      )}
      {...rest}
    >
      {icon}
    </button>
  )
}

ChipIcon.displayName = 'Chip.Icon'

export default ChipIcon
