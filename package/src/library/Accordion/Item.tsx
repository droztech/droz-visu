import { cn } from '@/src/utils/class-merge.helper'

import {
  Item,
  AccordionItemProps as ItemProps,
} from '@radix-ui/react-accordion'
import { FC, Ref, forwardRef, useImperativeHandle, useRef } from 'react'

export interface AccordionItemProps extends ItemProps {}

const AccordionItem: FC<AccordionItemProps> = forwardRef<
  HTMLDivElement,
  AccordionItemProps
>(({ children, className, ...rest }, ref: Ref<HTMLDivElement | null>) => {
  const elementRef = useRef<HTMLDivElement>(null)
  useImperativeHandle(ref, () => elementRef.current)

  return (
    <Item
      className={cn(
        'flex flex-col gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-light text-gray-900',
        className,
      )}
      {...rest}
    >
      {children}
    </Item>
  )
})

AccordionItem.displayName = 'Accordion.Root'

export default AccordionItem
