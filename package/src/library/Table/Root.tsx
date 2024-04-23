import { TableCaption } from './Caption'

import { Loading } from '..'

import { cn } from '@/src/utils/class-merge.helper'

import { HTMLAttributes, forwardRef } from 'react'

export interface TableRootProps extends HTMLAttributes<HTMLTableElement> {
  isLoading?: boolean
}

export const TableRoot = forwardRef<HTMLTableElement, TableRootProps>(
  ({ isLoading, children, className, ...rest }, ref) => (
    <div className="relative w-full overflow-auto rounded">
      <table
        ref={ref}
        className={cn('w-full caption-bottom text-sm', className)}
        {...rest}
      >
        {children}
        {isLoading && (
          <TableCaption className="py-8">
            <Loading className="items-center justify-center py-12" />
          </TableCaption>
        )}
      </table>
    </div>
  ),
)
TableRoot.displayName = 'TableRoot'
