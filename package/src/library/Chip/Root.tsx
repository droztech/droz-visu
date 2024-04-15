import { cn } from '@/src/utils/class-merge.helper'

import { FC, HTMLAttributes } from 'react'

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  label: string
}

const ChipRoot: FC<ChipProps> = ({ children, className, label, ...rest }) => {
  return (
    <div
      className={cn(
        'flex max-w-full items-center gap-1 rounded-3xl bg-primary-200 px-4 py-1',
        className,
      )}
      {...rest}
    >
      <span className="ellipsis text-xs">{label}</span>
      {children}
    </div>
  )
}

ChipRoot.displayName = 'ChipRoot.Root'

export default ChipRoot
