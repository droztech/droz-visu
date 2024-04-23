import { cn } from '@/src/utils/class-merge.helper'

import { TdHTMLAttributes, forwardRef } from 'react'

export interface TableCellProps
  extends TdHTMLAttributes<HTMLTableCellElement> {}

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, ...rest }, ref) => (
    <td
      ref={ref}
      className={cn('ellipsis p-4 font-light', className)}
      {...rest}
    />
  ),
)
TableCell.displayName = 'TableCell'
