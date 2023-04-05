import * as RadixAvatar from '@radix-ui/react-avatar'
import { clsx } from 'clsx'
import { FC, useMemo } from 'react'

import {
  rootColorVariants,
  rootSizeVariants,
  statusColorVariants,
  statusSizeVariants,
  statusStatusVariants,
} from './variants'

export interface AvatarProps extends RadixAvatar.AvatarProps {
  url: string
  fallback: string
  status?: 'success' | 'error' | 'none'
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary'
}

const Avatar: FC<AvatarProps> = ({
  url,
  fallback,
  status = 'none',
  size = 'md',
  color = 'primary',
  children,
  className,
  ...rest
}) => {
  const rootClass = useMemo(() => {
    return clsx(rootColorVariants[color], rootSizeVariants[size])
  }, [color, size])

  const statusClass = useMemo(() => {
    return clsx(
      statusStatusVariants[status],
      statusSizeVariants[size],
      statusColorVariants[color]
    )
  }, [color, status, size])

  return (
    <RadixAvatar.Root
      className={clsx(
        'font-semibold uppercase select-none cursor-pointer relative flex items-center justify-center rounded-full outline outline-2 outline-offset-2 transition-all',
        rootClass
      )}
      {...rest}
    >
      {status !== 'none' && (
        <div
          className={clsx(
            'absolute top-0 right-0 rounded-full outline outline-2',
            statusClass
          )}
        />
      )}
      <RadixAvatar.Image
        className="h-full w-full object-cover rounded-full"
        src={url}
        alt={`${fallback} Avatar`}
      />
      <RadixAvatar.Fallback
        className="p-1 overflow-hidden text-ellipsis whitespace-nowrap"
        delayMs={600}
      >
        {fallback}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}

export default Avatar

// const rootSizeClass = useMemo(() => {
//   return (
//     size &&
//     clsx({
//       'w-6 h-6 text-xs': size === 'sm',
//       'w-10 h-10 text-md': size === 'md',
//       'w-12 h-12 text-lg': size === 'lg',
//     })
//   )
// }, [size])

// const statusColorClass = useMemo(() => {
//   return status && (status === 'success' ? 'bg-success' : 'bg-error')
// }, [status])

// const statusSizeClass = useMemo(() => {
//   return (
//     size &&
//     clsx({
//       'w-1 h-1': size === 'sm',
//       'w-2 h-2': size === 'md',
//       'w-3 h-3': size === 'lg',
//     })
//   )
// }, [size])
