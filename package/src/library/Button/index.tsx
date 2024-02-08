import LoadingDots from '../Loading'

import { cn } from '@/src/utils/class-merge.helper'

import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, forwardRef, useMemo } from 'react'

const variantClassVariants = {
  neutral:
    'bg-gray-100 border-none text-gray-900 shadow-sm hover:bg-gray-200 active:bg-gray-400',
  primary:
    'bg-primary border-none text-gray-100 hover:bg-primary-500 active:bg-primary-600',
  secondary:
    'bg-secondary border-none text-gray-100 hover:bg-secondary-500 active:bg-secondary-600',
}

const ghostClassVariants = {
  neutral: 'border border-solid bg-transparent border-gray-600 text-gray-900',
  primary: 'border border-solid bg-transparent border-primary text-primary',
  secondary:
    'border border-solid bg-transparent border-secondary text-secondary',
}

const lightClassVariants = {
  neutral: 'bg-transparent text-gray-900',
  primary: 'bg-transparent text-primary',
  secondary: 'bg-transparent text-secondary',
}

const sizeClassVariants = {
  sm: 'py-2.5 px-6 text-sm min-h-10',
  md: 'py-3 px-10 min-h-12',
  lg: 'py-9 px-12 text-lg min-h-28 [&_div]:h-10 [&_div]:w-10',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  ghost?: boolean
  light?: boolean
  loading?: boolean
  size?: keyof typeof sizeClassVariants
  variant?: keyof typeof variantClassVariants
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild,
      children,
      className,
      disabled,
      ghost,
      light,
      loading,
      size = 'md',
      variant = 'primary',
      ...rest
    },
    ref,
  ) => {
    const RootComponent = asChild && !loading ? Slot : 'button'
    const isDisabled = disabled || loading

    const rootClass = useMemo(() => {
      if (isDisabled) {
        if (ghost)
          return 'pointer-events-none border border-gray text-gray-500 bg-transparent'
        if (light) return 'pointer-events-none text-gray bg-transparent'
        return 'pointer-events-none bg-gray text-gray-500'
      }
      if (light) return lightClassVariants[variant]
      if (ghost) return ghostClassVariants[variant]
      return variantClassVariants[variant]
    }, [ghost, isDisabled, light, variant])

    return (
      <RootComponent
        className={cn(
          'relative flex cursor-pointer items-center justify-center rounded-lg transition-all [&_svg]:h-6 [&_svg]:w-6',
          light ? 'p-2' : sizeClassVariants[size],
          rootClass,
          className,
        )}
        disabled={isDisabled}
        ref={ref}
        {...rest}
      >
        <div
          className={cn(
            'flex items-center justify-center gap-2.5',
            loading && 'opacity-0',
          )}
        >
          {children}
        </div>
        {loading && <LoadingDots className="absolute" />}
      </RootComponent>
    )
  },
)

Button.displayName = 'Button'

export default Button