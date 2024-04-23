import { cn } from '@/src/utils/class-merge.helper'

import { HTMLAttributes, forwardRef } from 'react'

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  hasHover?: boolean
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ hasHover = true, className, ...rest }, ref) => (
    <tr
      ref={ref}
      className={cn(
        'border-b border-gray-200 transition-colors data-[state=selected]:bg-gray-100 dark:border-gray-900 dark:data-[state=selected]:bg-gray-800',
        hasHover && 'hover:bg-gray-100/50 dark:hover:bg-gray-800/50',
        className,
      )}
      {...rest}
    />
  ),
)
TableRow.displayName = 'TableRow'
