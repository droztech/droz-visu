import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

const rootColorVariants = {
  alert: 'hover:text-alert-500 active:text-alert-600',
  error: 'hover:text-error-500 active:text-error-600',
  primary: 'hover:text-primary-500 active:text-primary-600',
  secondary: 'hover:text-secondary-500 active:text-secondary-600',
  success: 'hover:text-success-500 active:text-success-600',
}

export interface LinkProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
  color?: keyof typeof rootColorVariants
  underline?: boolean
}

const Link: FC<LinkProps> = ({
  asChild,
  color = 'primary',
  underline,
  children,
  className,
  ...rest
}) => {
  const Component = asChild ? Slot : 'span'

  return (
    <Component
      className={clsx(
        'cursor-pointer transition-colors children:text-inherit-size children:inline [&_svg]:align-middle',
        underline && 'underline underline-offset-2',
        rootColorVariants[color],
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Link
