import { cn } from '@/src/utils/class-merge.helper'

import { FC, HTMLAttributes } from 'react'

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {}

const ChipRoot: FC<ChipProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={cn(
        'ellipsis flex max-w-full items-center gap-1 rounded-3xl bg-primary-200 px-4 py-1 text-xs',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

ChipRoot.displayName = 'ChipRoot.Root'

export default ChipRoot
