import { cn } from '@/src/utils/class-merge.helper'

import {
  Header,
  AccordionHeaderProps as HeaderProps,
} from '@radix-ui/react-accordion'
import { FC, forwardRef } from 'react'

export interface AccordionHeaderProps extends HeaderProps {}

const AccordionHeader: FC<AccordionHeaderProps> = forwardRef<
  HTMLDivElement,
  AccordionHeaderProps
>(({ children, className, ...rest }, ref) => {
  return (
    <Header
      className={cn('flex items-center justify-between gap-4', className)}
      ref={ref}
      {...rest}
    >
      {children}
    </Header>
  )
})

AccordionHeader.displayName = 'Accordion.Root'

export default AccordionHeader
