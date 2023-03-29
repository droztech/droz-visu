import { clsx } from 'clsx'
import { FC, HTMLAttributes, useMemo } from 'react'

export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'md' | 'lg'
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'alert'
    | 'gray'
    | 'white'
    | 'current'
}

const LoadingDots: FC<LoadingProps> = ({
  size = 'md',
  color = 'current',
  className,
  ...rest
}) => {
  const dotClass = 'animate-flash opacity-20 rounded-full'

  const sizeClass = useMemo(() => {
    return clsx({
      'w-2 h-2': size === 'md',
      'w-3 h-3': size === 'lg',
    })
  }, [size])

  const colorClass = useMemo(() => {
    return clsx({
      'bg-primary': color === 'primary',
      'bg-secondary': color === 'secondary',
      'bg-success': color === 'success',
      'bg-error': color === 'error',
      'bg-alert': color === 'alert',
      'bg-gray': color === 'gray',
      'bg-gray-100': color === 'white',
      'bg-current': color === 'current',
    })
  }, [color])

  return (
    <div className={clsx('flex gap-2', className)} {...rest}>
      <div
        className={clsx(dotClass, sizeClass, colorClass)}
        style={{ animationDelay: '0ms' }}
      />
      <div
        className={clsx(dotClass, sizeClass, colorClass)}
        style={{ animationDelay: '500ms' }}
      />
      <div
        className={clsx(dotClass, sizeClass, colorClass)}
        style={{ animationDelay: '1000ms' }}
      />
    </div>
  )
}

export default LoadingDots
