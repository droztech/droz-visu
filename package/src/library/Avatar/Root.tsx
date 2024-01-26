import * as RadixAvatar from '@radix-ui/react-avatar'
import { Color, ColorClass, Size, SizeClass, Status, StatusClass } from '@types'
import { FC, useMemo } from 'react'
import { cn } from '@/src/utils/class-merge.helper'

export interface AvatarRootProps extends RadixAvatar.AvatarProps {
  color?: Color
  size?: Size
  status?: Status
}

export const rootColorVariants: ColorClass = {
  primary:
    'text-primary border-primary hover:border-primary-300 active:border-primary-200 hover:text-primary-300 active:text-primary-300',
  secondary:
    'text-secondary border-secondary hover:border-secondary-300 active:border-secondary-200 hover:text-secondary-300 active:text-secondary-300',
}

export const bgColorVariants: ColorClass = {
  primary: 'bg-primary-200',
  secondary: 'bg-secondary-200',
}

export const rootSizeVariants: SizeClass = {
  sm: 'w-6 h-6 text-xs',
  md: 'w-10 h-10 text-md',
  lg: 'w-12 h-12 text-lg',
}

export const statusColorVariants: ColorClass = {
  primary: 'border-primary-700',
  secondary: 'border-secondary-700',
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

const AvatarRoot: FC<AvatarRootProps> = ({ children, className, color = 'primary', size = 'md', status, ...rest }) => {
  const rootClass = useMemo<string>(() => {
    return cn(rootColorVariants[color], rootSizeVariants[size])
  }, [color, size])

  const bgClass = useMemo<string>(() => {
    return bgColorVariants[color]
  }, [color])

  const statusClass = useMemo<string>(() => {
    return cn(status && statusStatusVariants[status], statusSizeVariants[size], statusColorVariants[color])
  }, [color, status, size])

  return (
    <RadixAvatar.Root
      className={cn(
        className,
        'relative cursor-pointer select-none rounded-full border-2 p-[2px] uppercase transition-all',
        rootClass,
      )}
      {...rest}
    >
      {status && <div className={cn('absolute right-0 top-0 rounded-full border-2', statusClass)} />}
      <div className={cn('flex aspect-square h-full w-full items-center justify-center rounded-full', bgClass)}>
        {children}
      </div>
    </RadixAvatar.Root>
  )
}

AvatarRoot.displayName = 'Avatar.Root'

export default AvatarRoot
