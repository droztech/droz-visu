import * as RadixAvatar from '@radix-ui/react-avatar'
import { clsx } from 'clsx'
import { FC } from 'react'

export interface AvatarImageProps extends Omit<RadixAvatar.AvatarImageProps, 'children'> {}

const AvatarImage: FC<AvatarImageProps> = ({ className, ...rest }) => {
  return (
    <RadixAvatar.Image className={clsx([className, 'h-full', 'w-full', 'object-cover', 'rounded-full'])} {...rest} />
  )
}

AvatarImage.displayName = 'Avatar.Image'

export default AvatarImage
