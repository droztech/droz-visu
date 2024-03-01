import { cn } from '@/src/utils/class-merge.helper'

import { FC, HTMLAttributes } from 'react'

const colorVariants = {
  alert: { root: 'bg-alert' },
  current: { root: 'bg-current' },
  error: { root: 'bg-error' },
  gray: { root: 'bg-gray' },
  primary: { root: 'bg-primary' },
  secondary: { root: 'bg-secondary' },
  success: { root: 'bg-success' },
  white: { root: 'bg-gray-100' },
}

const sizeVariants = {
  md: { root: 'w-2 h-2' },
  lg: { root: 'w-3 h-3' },
}

export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  color?: keyof typeof colorVariants
  size?: keyof typeof sizeVariants
}

const LoadingDots: FC<LoadingProps> = ({
  className,
  color = 'current',
  size = 'md',
  ...rest
}) => {
  return (
    <div className={cn('flex gap-2', className)} {...rest}>
      <div
        className={cn(
          'animate-flash rounded-full opacity-20',
          sizeVariants[size].root,
          colorVariants[color].root,
        )}
        style={{ animationDelay: '0ms' }}
      />
      <div
        className={cn(
          'animate-flash rounded-full opacity-20',
          sizeVariants[size].root,
          colorVariants[color].root,
        )}
        style={{ animationDelay: '500ms' }}
      />
      <div
        className={cn(
          'animate-flash rounded-full opacity-20',
          sizeVariants[size].root,
          colorVariants[color].root,
        )}
        style={{ animationDelay: '1000ms' }}
      />
    </div>
  )
}

LoadingDots.displayName = 'Loading'

export default LoadingDots
