import { cn } from '@/src/utils/class-merge.helper'
import { ColorClass, StatusClass, VariantClass } from '@types'

import { FC, HTMLAttributes } from 'react'

const colorVariants: StatusClass &
  ColorClass &
  VariantClass<'current' | 'gray' | 'white'> = {
  success: { root: 'bg-success' },
  error: { root: 'bg-error' },
  alert: { root: 'bg-alert' },
  primary: { root: 'bg-primary' },
  secondary: { root: 'bg-secondary' },
  current: { root: 'bg-current' },
  gray: { root: 'bg-gray' },
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
