import * as HoverCard from '@radix-ui/react-hover-card'
import { FC } from 'react'

export interface FloatCardRootProps extends HoverCard.HoverCardProps {}

const FloatCardRoot: FC<FloatCardRootProps> = ({ children, ...rest }) => {
  return <HoverCard.Root {...rest}>{children}</HoverCard.Root>
}

FloatCardRoot.displayName = 'FloatCard.Root'

export default FloatCardRoot
