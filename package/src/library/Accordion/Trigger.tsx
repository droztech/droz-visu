import Icon from '../Icon'
import { Trigger, AccordionTriggerProps as TriggerProps } from '@radix-ui/react-accordion'
import { CaretDown } from 'phosphor-react'
import { FC, Ref, forwardRef, useImperativeHandle, useRef } from 'react'
import { cn } from '@/src/utils/class-merge.helper'

export interface AccordionTriggerProps extends TriggerProps {}

const AccordionTrigger: FC<AccordionTriggerProps> = forwardRef<HTMLDivElement, AccordionTriggerProps>(
  ({ children, className, ...rest }, ref: Ref<HTMLDivElement | null>) => {
    const elementRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => elementRef.current)

    return (
      <Icon size="sm" asChild>
        <Trigger className={cn('transition-all duration-200 data-[state=open]:rotate-[180deg]', className)} {...rest}>
          {children ?? <CaretDown />}
        </Trigger>
      </Icon>
    )
  },
)

AccordionTrigger.displayName = 'Accordion.Root'

export default AccordionTrigger
