import { cn } from '@/src/utils/class-merge.helper'

import { HTMLAttributes, forwardRef } from 'react'

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  selected?: boolean
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ selected, className, ...rest }, ref) => (
    <tr
      ref={ref}
      className={cn(
        'border-b border-gray-300 transition-colors hover:bg-gray-200',
        selected && 'bg-primary-100',
        className,
      )}
      {...rest}
    />
  ),
)
TableRow.displayName = 'TableRow'
