import { cn } from '@/src/utils/class-merge.helper'

import { HTMLAttributes, forwardRef } from 'react'

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  hasHover?: boolean
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ hasHover, className, ...rest }, ref) => (
    <tr
      ref={ref}
      className={cn(
        'border-b border-gray-300 transition-colors',
        hasHover && 'hover:bg-gray-100/50',
        className,
      )}
      {...rest}
    />
  ),
)
TableRow.displayName = 'TableRow'
