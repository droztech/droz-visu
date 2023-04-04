import * as HoverCard from '@radix-ui/react-hover-card'
import { FC } from 'react'

export interface FloatCardTriggerProps
  extends HoverCard.HoverCardTriggerProps {}

const FloatCardTrigger: FC<FloatCardTriggerProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <HoverCard.Trigger asChild {...rest}>
      {children}
    </HoverCard.Trigger>
  )
}

export default FloatCardTrigger