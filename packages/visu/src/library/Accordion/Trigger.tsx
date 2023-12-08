import Icon from '../Icon'
import { Trigger, AccordionTriggerProps as TriggerProps } from '@radix-ui/react-accordion'
import { clsx } from 'clsx'
import { CaretDown } from 'phosphor-react'
import { FC, Ref, forwardRef, useImperativeHandle, useRef } from 'react'

export interface AccordionTriggerProps extends TriggerProps {}

const AccordionTrigger: FC<AccordionTriggerProps> = forwardRef<HTMLDivElement, AccordionTriggerProps>(
  ({ children, className, ...rest }, ref: Ref<HTMLDivElement | null>) => {
    const elementRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => elementRef.current)

    return (
      <Icon size="sm" asChild>
        <Trigger className={clsx('transition-all duration-200 data-[state=open]:rotate-[180deg]', className)} {...rest}>
          {children ?? <CaretDown />}
        </Trigger>
      </Icon>
    )
  },
)

AccordionTrigger.displayName = 'Accordion.Root'

export default AccordionTrigger
