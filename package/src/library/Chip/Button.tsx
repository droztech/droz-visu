import { cn } from '@/src/utils/class-merge.helper'

import { FC, HTMLAttributes } from 'react'

export interface ChipButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const ChipButton: FC<ChipButtonProps> = ({ className, children, ...rest }) => {
  return (
    <button
      className={cn(
        'text-xs opacity-50 outline-none transition-all hover:opacity-100 focus:opacity-100 active:opacity-100',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}

ChipButton.displayName = 'Chip.Icon'

export default ChipButton
