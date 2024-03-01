import { cn } from '@/src/utils/class-merge.helper'
import { Orientation, OrientationClass } from '@types'

import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

const orientationVariants: OrientationClass = {
  vertical: { root: 'h-full flex-col', border: 'border-r', children: 'my-4' },
  horizontal: { root: 'w-full flex-row', border: 'border-t', children: 'mx-4' },
}

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation: Orientation
}

const DividerVertical: FC<DividerProps> = ({
  orientation,
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        'flex items-center',
        orientationVariants[orientation].root,
        className,
      )}
      {...rest}
    >
      <hr
        className={clsx(
          'flex-1 border-gray-300',
          orientationVariants[orientation].border,
        )}
      />
      {children && (
        <span className={orientationVariants[orientation].children}>
          {children}
        </span>
      )}
      <hr
        className={clsx(
          'flex-1 border-gray-300',
          orientationVariants[orientation].border,
        )}
      />
    </div>
  )
}

DividerVertical.displayName = 'Divider.Vertical'

export default DividerVertical
