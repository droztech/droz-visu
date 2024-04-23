import { cn } from '@/src/utils/class-merge.helper'

import { TdHTMLAttributes, forwardRef } from 'react'

export interface TableCellProps
  extends TdHTMLAttributes<HTMLTableCellElement> {}

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, ...rest }, ref) => (
    <td
      ref={ref}
      className={cn(
        'p-4 align-middle aria-[disabled=true]:opacity-50 [&:has([role=checkbox])]:pr-0',
        className,
      )}
      {...rest}
    />
  ),
)
TableCell.displayName = 'TableCell'
