import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ButtonHTMLAttributes, FC, useMemo } from 'react'

const sizeClassVariants = {
  sm: 'w-8 h-8 [&_svg]:h-4 [&_svg]:w-4',
  md: 'w-10 h-10 [&_svg]:h-6 [&_svg]:w-6',
}

export interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  size?: keyof typeof sizeClassVariants
}

const Icon: FC<IconProps> = ({
  asChild,
  size = 'md',
  children,
  className,
  disabled,
  ...rest
}) => {
  const RootComponent = asChild ? Slot : 'button'

  const rootClass = useMemo(() => {
    if (disabled) return 'bg-gray-200 text-gray pointer-events-none'
    return 'bg-primary-100 text-primary hover:bg-primary-200'
  }, [disabled])

  const sizeClass = useMemo(() => {
    return sizeClassVariants[size]
  }, [size])

  return (
    <RootComponent
      className={clsx(
        'flex items-center justify-center rounded-full transition-all active:opacity-50',
        rootClass,
        sizeClass,
        className,
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
