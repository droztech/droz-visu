import { Slot } from '@radix-ui/react-slot'
import { ExtendedColor, ExtendedColorClass } from '@types'
import { clsx } from 'clsx'
import { ButtonHTMLAttributes, FC, useMemo } from 'react'

const sizeClassVariants = {
  sm: 'w-8 h-8 [&_svg]:h-4 [&_svg]:w-4',
  md: 'w-10 h-10 [&_svg]:h-6 [&_svg]:w-6',
}

export interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  color?: ExtendedColor
  size?: keyof typeof sizeClassVariants
}

const colorClassVariants: ExtendedColorClass = {
  alert: 'bg-alert-100 text-alert hover:bg-alert-200',
  current: 'bg-current text-current',
  error: 'bg-error-100 text-error hover:bg-error-200',
  gray: 'bg-gray-100 text-gray hover:bg-gray-200',
  primary: 'bg-primary-100 text-primary hover:bg-primary-200',
  secondary: 'bg-secondary-100 text-secondary hover:bg-secondary-200',
  success: 'bg-success-100 text-success hover:bg-success-200',
  white: 'bg-gray-100',
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
