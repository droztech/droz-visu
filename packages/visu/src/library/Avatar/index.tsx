import * as RadixAvatar from '@radix-ui/react-avatar'
import { clsx } from 'clsx'
import { FC, useMemo } from 'react'

export interface AvatarProps extends RadixAvatar.AvatarProps {
  url: string
  fallback: string
  status?: 'success' | 'error'
  size?: 'sm' | 'md' | 'lg'
}

const Avatar: FC<AvatarProps> = ({
  url,
  fallback,
  status,
  size = 'md',
  children,
  className,
  ...rest
}) => {
  const statusColorClass = useMemo(() => {
    return status && (status === 'success' ? 'bg-success' : 'bg-error')
  }, [status])

  const rootSizeClass = useMemo(() => {
    return (
      size &&
      clsx({
        'w-6 h-6': size === 'sm',
        'w-10 h-10': size === 'md',
        'w-12 h-12': size === 'lg',
      })
    )
  }, [size])

  const fontSizeClass = useMemo(() => {
    return (
      size &&
      clsx({
        'text-xs': size === 'sm',
        'text-md': size === 'md',
        'text-lg': size === 'lg',
      })
    )
  }, [size])

  const statusSizeClass = useMemo(() => {
    return (
      size &&
      clsx({
        'w-1 h-1': size === 'sm',
        'w-2 h-2': size === 'md',
        'w-3 h-3': size === 'lg',
      })
    )
  }, [size])

  return (
    <RadixAvatar.Root
      className={clsx(
        'relative flex items-center justify-center rounded-full bg-primary-200 outline outline-2 outline-offset-2 outline-primary',
        rootSizeClass
      )}
      {...rest}
    >
      {status && (
        <div
          className={clsx(
            'absolute top-0 right-0 rounded-full outline outline-2 outline-primary',
            statusSizeClass,
            statusColorClass
          )}
        />
      )}
      <RadixAvatar.Image
        className="h-full w-full object-cover rounded-full"
        src={url}
        alt={`${fallback} Avatar`}
      />
      <RadixAvatar.Fallback
        className={clsx('text-primary font-semibold uppercase', fontSizeClass)}
        delayMs={600}
      >
        {fallback}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  )
}

export default Avatar
