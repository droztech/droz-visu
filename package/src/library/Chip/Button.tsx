import { cn } from '@/src/utils/class-merge.helper'

import { FC, HTMLAttributes } from 'react'

export interface ChipButtonProps extends HTMLAttributes<HTMLDivElement> {}

const ChipButton: FC<ChipButtonProps> = ({ className, children, ...rest }) => {
  return (
    <div
      className={cn(
        'cursor-pointer text-xs opacity-50 outline-none transition-all hover:opacity-100 focus:opacity-100 active:opacity-100',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

ChipButton.displayName = 'Chip.Icon'

export default ChipButton
