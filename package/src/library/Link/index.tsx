import { cn } from '@/src/utils/class-merge.helper'

import { Slot } from '@radix-ui/react-slot'
import { FC, HTMLAttributes } from 'react'

const colorVariants = {
  alert: { root: 'hover:text-alert-500 active:text-alert-600' },
  error: { root: 'hover:text-error-500 active:text-error-600' },
  primary: { root: 'hover:text-primary-500 active:text-primary-600' },
  secondary: { root: 'hover:text-secondary-500 active:text-secondary-600' },
  success: { root: 'hover:text-success-500 active:text-success-600' },
}

const sizeVariants = {
  xs: { root: 'text-xs' },
  sm: { root: 'text-sm' },
  md: { root: 'text-md' },
  lg: { root: 'text-lg' },
}

export interface LinkProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
  color?: keyof typeof colorVariants
  underline?: boolean
  size?: keyof typeof sizeVariants
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
        colorVariants[color].root,
        size && sizeVariants[size].root,
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Link
