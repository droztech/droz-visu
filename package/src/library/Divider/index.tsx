import { cn } from '@/src/utils/class-merge.helper'

import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

const orientationRootClassVariants = {
  vertical: 'h-full flex-col',
  horizontal: 'w-full flex-row',
}

const orientationBorderClassVariants = {
  vertical: 'border-r',
  horizontal: 'border-t',
}

const orientationChildrenClassVariants = {
  vertical: 'my-4',
  horizontal: 'mx-4',
}

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation: keyof typeof orientationRootClassVariants
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
        orientationRootClassVariants[orientation],
        className,
      )}
      {...rest}
    >
      <hr
        className={clsx(
          'flex-1 border-gray-300',
          orientationBorderClassVariants[orientation],
        )}
      />
      {children && (
        <span className={orientationChildrenClassVariants[orientation]}>
          {children}
        </span>
      )}
      <hr
        className={clsx(
          'flex-1 border-gray-300',
          orientationBorderClassVariants[orientation],
        )}
      />
    </div>
  )
}

DividerVertical.displayName = 'Divider.Vertical'

export default DividerVertical
