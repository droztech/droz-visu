import { cn } from '@/src/utils/class-merge.helper'
import { FC, HTMLAttributes } from 'react'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  repeat?: number
}

const Skeleton: FC<SkeletonProps> = ({ repeat = 1, className, ...rest }) =>
  [...Array(repeat)].map((item, index) => (
    <div key={index} className={cn('animate-pulse rounded bg-gray-300', className)} {...rest} />
  ))

Skeleton.displayName = 'Skeleton.'

export default Skeleton
