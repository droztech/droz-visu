import { cn } from '@/src/utils/class-merge.helper'
import { FloatCardContentSide } from '@types'

import * as HoverCard from '@radix-ui/react-hover-card'
import { FC } from 'react'

export interface FloatCardContentProps extends HoverCard.HoverCardContentProps {
  side?: FloatCardContentSide
}

const FloatCardContent: FC<FloatCardContentProps> = ({
  children,
  side,
  className,
  ...rest
}) => {
  return (
    <HoverCard.Portal>
      <HoverCard.Content
        sideOffset={16}
        side={side}
        className={cn('rounded bg-gray-100 p-4 shadow-md', className)}
        {...rest}
      >
        {children}
      </HoverCard.Content>
    </HoverCard.Portal>
  )
}

FloatCardContent.displayName = 'FloatCard.Content'

export default FloatCardContent
