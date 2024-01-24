import * as RadixAvatar from '@radix-ui/react-avatar'
import { FC, ReactNode } from 'react'
import { cn } from '@/src/utils/class-merge.helper'

export interface AvatarFallbackProps extends Omit<RadixAvatar.AvatarFallbackProps, 'children'> {
  fallback: ReactNode
}

const AvatarFallback: FC<AvatarFallbackProps> = ({ className, fallback, delayMs = 600, ...rest }) => {
  return (
    <RadixAvatar.Fallback
      className={cn(className, 'overflow-hidden text-ellipsis whitespace-nowrap p-1')}
      delayMs={delayMs}
      {...rest}
    >
      {fallback}
    </RadixAvatar.Fallback>
  )
}

AvatarFallback.displayName = 'Avatar.Fallback'

export default AvatarFallback
