import { TableCaption } from './Caption'

import { Loading } from '..'

import { cn } from '@/src/utils/class-merge.helper'

import { HTMLAttributes, forwardRef } from 'react'

// tailwind classes cannot be generated dynamically (stylesheet is generated on build), so i've created a map to store the classes for each number up to 10
const hideClass: Record<number, string> = {
  1: '[&_td:nth-child(1)]:hidden [&_th:nth-child(1)]:hidden',
  2: '[&_td:nth-child(2)]:hidden [&_th:nth-child(2)]:hidden',
  3: '[&_td:nth-child(3)]:hidden [&_th:nth-child(3)]:hidden',
  4: '[&_td:nth-child(4)]:hidden [&_th:nth-child(4)]:hidden',
  5: '[&_td:nth-child(5)]:hidden [&_th:nth-child(5)]:hidden',
  6: '[&_td:nth-child(6)]:hidden [&_th:nth-child(6)]:hidden',
  7: '[&_td:nth-child(7)]:hidden [&_th:nth-child(7)]:hidden',
  8: '[&_td:nth-child(8)]:hidden [&_th:nth-child(8)]:hidden',
  9: '[&_td:nth-child(9)]:hidden [&_th:nth-child(9)]:hidden',
  10: '[&_td:nth-child(10)]:hidden [&_th:nth-child(10)]:hidden',
}

export interface TableRootProps extends HTMLAttributes<HTMLTableElement> {
  isLoading?: boolean
  fixed?: boolean
  hide?: number[]
}

export const TableRoot = forwardRef<HTMLTableElement, TableRootProps>(
  ({ isLoading, hide, children, className, fixed, ...rest }, ref) => (
    <div
      className={cn(
        'relative w-full rounded',
        hide?.map((h) => hideClass[h]),
        fixed ? 'overflow-hidden' : 'overflow-auto',
      )}
    >
      <table
        ref={ref}
        className={cn(
          'w-full caption-bottom text-sm ',
          fixed && 'table-fixed',
          className,
        )}
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
