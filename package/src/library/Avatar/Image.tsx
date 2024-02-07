import { cn } from '@/src/utils/class-merge.helper'

import * as RadixAvatar from '@radix-ui/react-avatar'
import { FC } from 'react'

export interface AvatarImageProps
  extends Omit<RadixAvatar.AvatarImageProps, 'children'> {}

const AvatarImage: FC<AvatarImageProps> = ({ className, ...rest }) => {
  return (
    <RadixAvatar.Image
      className={cn('h-full w-full rounded-full object-cover', className)}
      {...rest}
    />
  )
}

AvatarImage.displayName = 'Avatar.Image'

export default AvatarImage
