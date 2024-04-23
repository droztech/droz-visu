import { cn } from '@/src/utils/class-merge.helper'

import { HTMLAttributes, forwardRef } from 'react'

export interface TableFooterProps
  extends HTMLAttributes<HTMLTableSectionElement> {}

export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  TableFooterProps
>(({ className, ...rest }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-t bg-gray-100/50 font-medium dark:bg-gray-800/50 [&>tr]:last:border-b-0',
      className,
    )}
    {...rest}
  />
))
TableFooter.displayName = 'TableFooter'
