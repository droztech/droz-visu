import * as RadixAvatar from '@radix-ui/react-avatar'
import { clsx } from 'clsx'
import { FC, ReactNode } from 'react'

export interface AvatarFallbackProps extends Omit<RadixAvatar.AvatarFallbackProps, 'children'> {
  fallback: ReactNode
}

const AvatarFallback: FC<AvatarFallbackProps> = ({ className, fallback, delayMs = 600, ...rest }) => {
  return (
    <RadixAvatar.Fallback
      className={clsx([className, 'p-1', 'overflow-hidden', 'text-ellipsis', 'whitespace-nowrap'])}
      delayMs={delayMs}
      {...rest}
    >
      {fallback}
    </RadixAvatar.Fallback>
  )
}

AvatarFallback.displayName = 'Avatar.Fallback'

export default AvatarFallback
