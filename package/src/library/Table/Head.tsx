import { cn } from '@/src/utils/class-merge.helper'

import { ThHTMLAttributes, forwardRef } from 'react'

export interface TableHeadProps
  extends ThHTMLAttributes<HTMLTableCellElement> {}

export const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, ...rest }, ref) => (
    <th ref={ref} className={cn('ellipsis p-4', className)} {...rest} />
  ),
)
TableHead.displayName = 'TableHead'
