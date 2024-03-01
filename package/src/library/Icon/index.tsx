import { cn } from '@/src/utils/class-merge.helper'

import { Slot } from '@radix-ui/react-slot'
import { ButtonHTMLAttributes, forwardRef } from 'react'

const sizeVariants = {
  sm: { root: 'w-8 h-8 min-w-8 min-h-8 [&_svg]:h-4 [&_svg]:w-4' },
  md: { root: 'w-10 h-10 min-w-10 min-h-10 [&_svg]:h-6 [&_svg]:w-6' },
}

const colorVariants = {
  error: {
    root: 'bg-error-100 text-error hover:bg-error-200 active:bg-error-200',
  },
  primary: {
    root: 'bg-primary-100 text-primary hover:bg-primary-200 active:bg-primary-200',
  },
}

export interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  color?: keyof typeof colorVariants
  size?: keyof typeof sizeVariants
}

const Icon = forwardRef<HTMLButtonElement, IconProps>(
  (
    {
      asChild,
      children,
      className,
      color = 'primary',
      disabled,
      size = 'md',
      ...rest
    },
    ref,
  ) => {
    const RootComponent = asChild ? Slot : 'button'

    return (
      <RootComponent
        className={cn(
          'flex items-center justify-center rounded-full transition-all active:opacity-50',
          colorVariants[color].root,
          sizeVariants[size].root,
          disabled && 'pointer-events-none bg-gray-200 text-gray',
          className,
        )}
        disabled={disabled}
        ref={ref}
        {...rest}
      >
        {children}
      </RootComponent>
    )
  },
)

Icon.displayName = 'Icon'

export default Icon
