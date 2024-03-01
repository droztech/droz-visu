import { cn } from '@/src/utils/class-merge.helper'

import * as RadixAvatar from '@radix-ui/react-avatar'
import { FC, ReactNode } from 'react'

const colorVariants = {
  primary: {
    root: 'text-primary border-primary hover:border-primary-300 active:border-primary-200 hover:text-primary-300 active:text-primary-300',
    bg: 'bg-primary-200',
    status: 'border-primary-700',
  },
  secondary: {
    root: 'text-secondary border-secondary hover:border-secondary-300 active:border-secondary-200 hover:text-secondary-300 active:text-secondary-300',
    bg: 'bg-secondary-200',
    status: 'border-secondary-700',
  },
}

const sizeVariants = {
  sm: {
    root: 'w-6 h-6 text-xs',
    fallback: 'text-xs p-0',
    status: 'w-1 h-1',
  },
  md: {
    root: 'w-10 h-10 text-md',
    fallback: 'text-md p-1',
    status: 'w-2 h-2',
  },
  lg: {
    root: 'w-12 h-12 text-lg',
    fallback: 'text-lg p-1',
    status: 'w-3 h-3',
  },
}

const statusVariants = {
  success: {
    status: 'bg-success',
  },
  error: {
    status: 'bg-error',
  },
}

export interface AvatarProps extends RadixAvatar.AvatarProps {
  color?: keyof typeof colorVariants
  size?: keyof typeof sizeVariants
  status?: keyof typeof statusVariants
  fallback: ReactNode
  src?: string
  alt?: string
}

const Avatar: FC<AvatarProps> = ({
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
        'relative flex cursor-pointer select-none rounded-full border-2 p-[2px] uppercase transition-all',
        !onClick && 'pointer-events-none',
        colorVariants[color].root,
        sizeVariants[size].root,
        className,
      )}
      onClick={onClick}
      {...rest}
    >
      {status && (
        <div
          className={cn(
            'absolute right-0 top-0 rounded-full border-2',
            status && statusVariants[status].status,
            sizeVariants[size].status,
            colorVariants[color].status,
          )}
        />
      )}
      <div
        className={cn(
          'flex aspect-square h-full w-full items-center justify-center rounded-full',
          colorVariants[color].bg,
        )}
      >
        <RadixAvatar.Image
          className="h-full w-full rounded-full object-cover"
          src={src}
          alt={alt}
        />
        <RadixAvatar.Fallback
          className={cn(
            'overflow-hidden text-ellipsis whitespace-nowrap text-center',
            sizeVariants[size].fallback,
          )}
        >
          {fallback}
        </RadixAvatar.Fallback>
      </div>
    </RadixAvatar.Root>
  )
}

Avatar.displayName = 'Avatar.Root'

export default Avatar
