import { cn } from '@/src/utils/class-merge.helper'

import { ThHTMLAttributes, forwardRef } from 'react'

export interface TableHeadProps
  extends ThHTMLAttributes<HTMLTableCellElement> {}

export const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, ...rest }, ref) => (
    <th
      ref={ref}
      className={cn(
        'h-12 px-4 text-left align-middle font-medium text-gray-500 dark:text-gray-400 [&:has([role=checkbox])]:pr-0',
        className,
      )}
      {...rest}
    />
  ),
)
TableHead.displayName = 'TableHead'
