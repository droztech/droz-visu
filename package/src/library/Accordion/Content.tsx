import { cn } from '@/src/utils/class-merge.helper'
import { Content, AccordionContentProps as ContentProps } from '@radix-ui/react-accordion'
import { FC, Ref, forwardRef, useImperativeHandle, useRef } from 'react'

export interface AccordionContentProps extends ContentProps {}

const AccordionContent: FC<AccordionContentProps> = forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...rest }, ref: Ref<HTMLDivElement | null>) => {
    const elementRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => elementRef.current)

    return (
      <Content
        className={cn('data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown', className)}
        {...rest}
      >
        {children}
      </Content>
    )
  },
)

AccordionContent.displayName = 'Accordion.Root'

export default AccordionContent