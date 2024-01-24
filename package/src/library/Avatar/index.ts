import AvatarFallback from './Fallback'
import AvatarImage from './Image'
import AvatarRoot from './Root'

export type { AvatarFallbackProps } from './Fallback'
export type { AvatarImageProps } from './Image'
export type { AvatarRootProps } from './Root'

const Avatar = {
  Fallback: AvatarFallback,
  Image: AvatarImage,
  Root: AvatarRoot,
}

export default Avatar
