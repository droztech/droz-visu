import { cn } from '@/src/utils/class-merge.helper'

import * as RadixAvatar from '@radix-ui/react-avatar'
import { FC, ReactNode } from 'react'

const rootColorVariants = {
  primary:
    'text-primary border-primary hover:border-primary-300 active:border-primary-200 hover:text-primary-300 active:text-primary-300',
  secondary:
    'text-secondary border-secondary hover:border-secondary-300 active:border-secondary-200 hover:text-secondary-300 active:text-secondary-300',
}

const bgColorVariants = {
  primary: 'bg-primary-200',
  secondary: 'bg-secondary-200',
}

const statusColorVariants = {
  primary: 'border-primary-700',
  secondary: 'border-secondary-700',
}

const rootSizeVariants = {
  sm: 'w-6 h-6 text-xs',
  md: 'w-10 h-10 text-md',
  lg: 'w-12 h-12 text-lg',
}

const statusSizeVariants = {
  sm: 'w-1 h-1',
  md: 'w-2 h-2',
  lg: 'w-3 h-3',
}

const statusStatusVariants = {
  success: 'bg-success',
  error: 'bg-error',
}

export interface AvatarRootProps extends RadixAvatar.AvatarProps {
  color?: keyof typeof rootColorVariants
  size?: keyof typeof rootSizeVariants
  status?: keyof typeof statusStatusVariants
  fallback: ReactNode
  src: string
  alt: string
}

const AvatarRoot: FC<AvatarRootProps> = ({
  fallback,
  className,
  src,
  alt,
  color = 'primary',
  size = 'md',
  status,
  onClick,
  ...rest
}) => {
  return (
    <RadixAvatar.Root
      className={cn(
        'relative cursor-pointer select-none rounded-full border-2 p-[2px] uppercase transition-all',
        !onClick && 'pointer-events-none',
        rootColorVariants[color],
        rootSizeVariants[size],
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      {status && (
        <div
          className={cn(
            'absolute right-0 top-0 rounded-full border-2',
            status && statusStatusVariants[status],
            statusSizeVariants[size],
            statusColorVariants[color],
          )}
        />
      )}
      <div
        className={cn(
          'flex aspect-square h-full w-full items-center justify-center rounded-full',
          bgColorVariants[color],
        )}
      >
        <RadixAvatar.Image
          className="h-full w-full rounded-full object-cover"
          src={src}
          alt={alt}
        />
        <RadixAvatar.Fallback className="overflow-hidden text-ellipsis whitespace-nowrap p-1">
          {fallback}
        </RadixAvatar.Fallback>
      </div>
    </RadixAvatar.Root>
  )
}

AvatarRoot.displayName = 'Avatar.Root'

export default AvatarRoot
