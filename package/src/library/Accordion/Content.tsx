import { cn } from '@/src/utils/class-merge.helper'

import {
  Content,
  AccordionContentProps as ContentProps,
} from '@radix-ui/react-accordion'
import { FC, forwardRef } from 'react'

export interface AccordionContentProps extends ContentProps {}

const AccordionContent: FC<AccordionContentProps> = forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...rest }, ref) => {
  return (
    <Content
      className={cn(
        'data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown',
        className,
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </Content>
  )
})

AccordionContent.displayName = 'Accordion.Root'

export default AccordionContent
