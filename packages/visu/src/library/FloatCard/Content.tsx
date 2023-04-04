import * as HoverCard from '@radix-ui/react-hover-card'
import { clsx } from 'clsx'
import { FC } from 'react'

export interface FloatCardContentProps extends HoverCard.HoverCardContentProps {
  side?: 'top' | 'right' | 'bottom' | 'left' | undefined
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
        className={clsx('rounded bg-gray-100 shadow-md p-4', className)}
        {...rest}
      >
        {children}
      </HoverCard.Content>
    </HoverCard.Portal>
  )
}

export default FloatCardContent