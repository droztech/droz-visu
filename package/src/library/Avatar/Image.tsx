import * as RadixAvatar from '@radix-ui/react-avatar'
import { FC } from 'react'
import { cn } from '@/src/utils/class-merge.helper'

export interface AvatarImageProps extends Omit<RadixAvatar.AvatarImageProps, 'children'> {}

const AvatarImage: FC<AvatarImageProps> = ({ className, ...rest }) => {
  return <RadixAvatar.Image className={cn(className, 'h-full w-full rounded-full object-cover')} {...rest} />
}

AvatarImage.displayName = 'Avatar.Image'

export default AvatarImage
