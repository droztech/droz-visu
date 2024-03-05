import Icon from '../Icon'

import { cn } from '@/src/utils/class-merge.helper'

import { CaretDown } from '@phosphor-icons/react'
import {
  Trigger,
  AccordionTriggerProps as TriggerProps,
} from '@radix-ui/react-accordion'
import { FC, forwardRef } from 'react'

export interface AccordionTriggerProps extends TriggerProps {}

const AccordionTrigger: FC<AccordionTriggerProps> = forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...rest }, ref) => {
  return (
    <Icon size="sm" asChild>
      <Trigger
        className={cn(
          'transition-all duration-200 data-[state=open]:rotate-[180deg]',
          className,
        )}
        ref={ref}
        {...rest}
      >
        {children ?? <CaretDown />}
      </Trigger>
    </Icon>
  )
})

AccordionTrigger.displayName = 'Accordion.Root'

export default AccordionTrigger
