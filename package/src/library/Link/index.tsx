import { cn } from '@/src/utils/class-merge.helper'

import { Slot } from '@radix-ui/react-slot'
import { FC, HTMLAttributes } from 'react'

const rootColorVariants = {
  alert: 'hover:text-alert-500 active:text-alert-600',
  error: 'hover:text-error-500 active:text-error-600',
  primary: 'hover:text-primary-500 active:text-primary-600',
  secondary: 'hover:text-secondary-500 active:text-secondary-600',
  success: 'hover:text-success-500 active:text-success-600',
}

const rootSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-md',
  lg: 'text-lg',
}

export interface LinkProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
  color?: keyof typeof rootColorVariants
  underline?: boolean
  size?: keyof typeof rootSizes
}

const Link: FC<LinkProps> = ({
  asChild,
  color = 'primary',
  size,
  underline,
  children,
  className,
  ...rest
}) => {
  const Component = asChild ? Slot : 'span'

  return (
    <Component
      className={cn(
        'tex cursor-pointer transition-colors children:inline children:text-inherit-size [&_svg]:align-middle',
        underline && 'underline underline-offset-2',
        rootColorVariants[color],
        size && rootSizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Link
