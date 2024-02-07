import { cn } from '@/src/utils/class-merge.helper'

import { FC, HTMLAttributes, useMemo } from 'react'

const colorClassVariants = {
  alert: 'bg-alert',
  current: 'bg-current',
  error: 'bg-error',
  gray: 'bg-gray',
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  success: 'bg-success',
  white: 'bg-gray-100',
}

const sizeClassVariants = {
  md: 'w-2 h-2',
  lg: 'w-3 h-3',
}

export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  color?: keyof typeof colorClassVariants
  size?: keyof typeof sizeClassVariants
}

const LoadingDots: FC<LoadingProps> = ({
  className,
  color = 'current',
  size = 'md',
  ...rest
}) => {
  const colorClass = useMemo<string>(() => {
    return colorClassVariants[color]
  }, [color])

  const dotClass = 'animate-flash opacity-20 rounded-full'

  const sizeClass = useMemo<string>(() => {
    return sizeClassVariants[size]
  }, [size])

  return (
    <div className={cn('flex gap-2', className)} {...rest}>
      <div
        className={cn(dotClass, sizeClass, colorClass)}
        style={{ animationDelay: '0ms' }}
      />
      <div
        className={cn(dotClass, sizeClass, colorClass)}
        style={{ animationDelay: '500ms' }}
      />
      <div
        className={cn(dotClass, sizeClass, colorClass)}
        style={{ animationDelay: '1000ms' }}
      />
    </div>
  )
}

LoadingDots.displayName = 'Loading'

export default LoadingDots
