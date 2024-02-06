import { cn } from '@/src/utils/class-merge.helper'

import { FC, HTMLAttributes } from 'react'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  repeat?: number
}

const Skeleton: FC<SkeletonProps> = ({ repeat = 1, className, ...rest }) =>
  [...Array(repeat)].map((item, index) => (
    <div
      key={index}
      className={cn(
        'animate-wave rounded bg-gradient-to-r from-gray-300 from-30% via-gray-200 via-50% to-gray-300 to-80% bg-[length:300%_100%]',
        className,
      )}
      {...rest}
    />
  ))

Skeleton.displayName = 'Skeleton.'

export default Skeleton
