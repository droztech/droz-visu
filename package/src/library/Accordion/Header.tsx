import { cn } from '@/src/utils/class-merge.helper'

import {
  Header,
  AccordionHeaderProps as HeaderProps,
} from '@radix-ui/react-accordion'
import { FC, Ref, forwardRef, useImperativeHandle, useRef } from 'react'

export interface AccordionHeaderProps extends HeaderProps {}

const AccordionHeader: FC<AccordionHeaderProps> = forwardRef<
  HTMLDivElement,
  AccordionHeaderProps
>(({ children, className, ...rest }, ref: Ref<HTMLDivElement | null>) => {
  const elementRef = useRef<HTMLDivElement>(null)
  useImperativeHandle(ref, () => elementRef.current)

  return (
    <Header
      className={cn('flex items-center justify-between gap-4', className)}
      {...rest}
    >
      {children}
    </Header>
  )
})

AccordionHeader.displayName = 'Accordion.Root'

export default AccordionHeader
