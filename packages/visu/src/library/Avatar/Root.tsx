import * as RadixAvatar from '@radix-ui/react-avatar'
import { Color, ColorClass, Size, SizeClass, Status, StatusClass } from '@types'
import { clsx } from 'clsx'
import { FC, useMemo } from 'react'

export interface AvatarRootProps extends RadixAvatar.AvatarProps {
  color?: Color
  size?: Size
  status?: Status
}

export const rootColorVariants: ColorClass = {
  primary:
    'bg-primary-200 text-primary outline-primary hover:outline-primary-300 active:outline-primary-200 hover:text-primary-300 active:text-primary-300',
  secondary:
    'bg-secondary-200 text-secondary outline-secondary hover:outline-secondary-300 active:outline-secondary-200 hover:text-secondary-300 active:text-secondary-300',
}

export const rootSizeVariants: SizeClass = {
  sm: 'w-6 h-6 text-xs',
  md: 'w-10 h-10 text-md',
  lg: 'w-12 h-12 text-lg',
}

export const statusColorVariants: ColorClass = {
  primary: 'outline-primary',
  secondary: 'outline-secondary',
}

export const statusStatusVariants: StatusClass = {
  success: 'bg-success',
  error: 'bg-error',
}

export const statusSizeVariants: SizeClass = {
  sm: 'w-1 h-1',
  md: 'w-2 h-2',
  lg: 'w-3 h-3',
}

const AvatarRoot: FC<AvatarRootProps> = ({
  children,
  className,
  color = 'primary',
  size = 'md',
  status,
  ...rest
}) => {
  const rootClass = useMemo<string>(() => {
    return clsx(rootColorVariants[color], rootSizeVariants[size])
  }, [color, size])

  const statusClass = useMemo<string>(() => {
    return clsx(
      status ? statusStatusVariants[status] : '',
      statusSizeVariants[size],
      statusColorVariants[color]
    )
  }, [color, status, size])

  return (
    <RadixAvatar.Root
      className={clsx([
        className,
        'font-semibold',
        'uppercase',
        'select-none',
        'cursor-pointer',
        'relative',
        'flex',
        'items-center',
        'justify-center',
        'rounded-full',
        'outline',
        'outline-2',
        'outline-offset-2',
        'transition-all',
        rootClass,
      ])}
      {...rest}
    >
      {status && (
        <div
          className={clsx([
            'absolute',
            'top-0',
            'right-0',
            'rounded-full',
            'outline',
            'outline-2',
            statusClass,
          ])}
        />
      )}
      {children}
    </RadixAvatar.Root>
  )
}

AvatarRoot.displayName = 'Avatar.Root'

export default AvatarRoot
