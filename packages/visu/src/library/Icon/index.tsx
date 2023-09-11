import { Slot } from '@radix-ui/react-slot'
import { IconColor, IconColorClass } from '@types'
import { clsx } from 'clsx'
import { ButtonHTMLAttributes, FC, useMemo } from 'react'

const sizeClassVariants = {
  sm: 'w-8 h-8 min-w-8 min-h-8 [&_svg]:h-4 [&_svg]:w-4',
  md: 'w-10 h-10 min-w-10 min-h-10 [&_svg]:h-6 [&_svg]:w-6',
}

export interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  color?: IconColor
  size?: keyof typeof sizeClassVariants
}

const colorClassVariants: IconColorClass = {
  error: 'bg-error-100 text-error hover:bg-error-200 active:bg-error-200',
  primary:
    'bg-primary-100 text-primary hover:bg-primary-200 active:bg-primary-200',
}

const Icon: FC<IconProps> = ({
  asChild,
  children,
  className,
  color = 'primary',
  disabled,
  size = 'md',
  ...rest
}) => {
  const RootComponent = asChild ? Slot : 'button'

  const colorClass = useMemo(() => {
    return colorClassVariants[color]
  }, [color])

  const rootClass = useMemo(() => {
    if (disabled) return 'bg-gray-200 text-gray pointer-events-none'
    return ''
  }, [disabled])

  const sizeClass = useMemo(() => {
    return sizeClassVariants[size]
  }, [size])

  return (
    <RootComponent
      className={clsx(
        className,
        'flex items-center justify-center rounded-full transition-all active:opacity-50',
        colorClass,
        rootClass,
        sizeClass,
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </RootComponent>
  )
}

Icon.displayName = 'Icon'

export default Icon
