import { cn } from '@/src/utils/class-merge.helper'

import { TdHTMLAttributes, forwardRef } from 'react'

export interface TableCellProps
  extends TdHTMLAttributes<HTMLTableCellElement> {}

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, children, ...rest }, ref) => (
    <td ref={ref} {...rest}>
      <div
        className={cn(
          '[&_*]:ellipsis ellipsis flex h-full max-h-full w-full max-w-full p-4 text-sm font-light',
          className,
        )}
      >
        {children}
      </div>
    </td>
  ),
)
TableCell.displayName = 'TableCell'
