import LoadingDots from '../Loading'

import { cn } from '@/src/utils/class-merge.helper'
import { Size, SizeClass, VariantClass } from '@types'

import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, forwardRef, useMemo } from 'react'

const disabledVariants = {
  root: {
    variant: 'pointer-events-none bg-gray text-gray-500',
    ghost:
      'pointer-events-none border border-gray text-gray-500 bg-transparent',
    light: 'pointer-events-none text-gray bg-transparent',
  },
}

const colorVariants: VariantClass<'neutral' | 'primary' | 'secondary'> = {
  neutral: {
    root: {
      variant:
        'bg-gray-100 border-none text-gray-900 shadow-sm hover:bg-gray-200 active:bg-gray-400',
      ghost: 'border border-solid bg-transparent border-gray-600 text-gray-900',
      light: 'bg-transparent text-gray-900',
    },
  },
  primary: {
    root: {
      variant:
        'bg-primary border-none text-gray-100 hover:bg-primary-500 active:bg-primary-600',
      ghost: 'border border-solid bg-transparent border-primary text-primary',
      light: 'bg-transparent text-primary',
    },
  },
  secondary: {
    root: {
      variant:
        'bg-secondary border-none text-gray-100 hover:bg-secondary-500 active:bg-secondary-600',
      ghost:
        'border border-solid bg-transparent border-secondary text-secondary',
      light: 'bg-transparent text-secondary',
    },
  },
}

const sizeVariants: SizeClass = {
  sm: {
    root: 'py-2.5 px-6 text-sm min-h-10',
  },
  md: {
    root: 'py-3 px-10 min-h-12',
  },
  lg: {
    root: 'py-9 px-12 text-lg min-h-28 [&_div]:h-10 [&_div]:w-10',
  },
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  ghost?: boolean
  light?: boolean
  loading?: boolean
  size?: Size
  variant?: keyof typeof colorVariants
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
    const RootComponent = asChild ? Slot : 'button'
    const isDisabled = disabled || loading

    const rootClass = useMemo(() => {
      if (isDisabled) {
        if (ghost) return disabledVariants.root.ghost
        if (light) return disabledVariants.root.light
        return disabledVariants.root.variant
      }
      if (light) return colorVariants[variant].root.light
      if (ghost) return colorVariants[variant].root.ghost
      return colorVariants[variant].root.variant
    }, [ghost, isDisabled, light, variant])

    return (
      <RootComponent
        className={cn(
          'flex cursor-pointer items-center justify-center gap-2.5 rounded-lg transition-all [&_svg]:w-6',
          light ? 'p-2' : sizeVariants[size].root,
          rootClass,
          className,
        )}
        disabled={isDisabled}
        ref={ref}
        {...rest}
      >
        {!loading ? (
          children
        ) : (
          <div className="relative flex items-center justify-center">
            <span className="flex items-center justify-center gap-2.5 opacity-0">
              {children}
            </span>
            <LoadingDots className="absolute" />
          </div>
        )}
      </RootComponent>
    )
  },
)

Button.displayName = 'Button'

export default Button
