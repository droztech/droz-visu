import { cn } from '@/src/utils/class-merge.helper'

import { FC } from 'react'
import ReactPaginate, { ReactPaginateProps } from 'react-paginate'

export interface PaginationProps
  extends Omit<ReactPaginateProps, 'onPageChange' | 'pageCount'> {
  current: number
  onPageChange: (data: number) => void
  pageCount: number
  disabled?: boolean
  size?: number
}

const Pagination: FC<PaginationProps> = ({
  current,
  onPageChange,
  disabled,
  size,
  className,
  ...rest
}) => {
  return (
    <ReactPaginate
      className={cn('flex items-center gap-1', className)}
      nextLabel="›"
      previousLabel="‹"
      activeClassName={cn(
        'pointer-events-none !text-gray-100',
        disabled ? 'bg-gray-400' : 'bg-primary-400',
      )}
      pageClassName={cn(
        'w-8 h-8 flex items-center justify-center rounded-full',
        disabled ? 'text-gray-400 pointer-events-none' : 'text-gray-600',
      )}
      nextClassName={cn(
        'flex items-center justify-center [&>*]:text-lg [&>*]:px-1',
        disabled ? 'text-gray-400 pointer-events-none' : 'text-gray-600',
      )}
      previousClassName={cn(
        'flex items-center justify-center [&>*]:text-lg [&>*]:px-1',
        disabled ? 'text-gray-400 pointer-events-none' : 'text-gray-600',
      )}
      breakClassName={cn(
        'flex items-center justify-center',
        disabled ? 'text-gray-400 pointer-events-none' : 'text-gray-600',
      )}
      disabledClassName="pointer-events-none text-gray-400"
      forcePage={current - 1}
      pageRangeDisplayed={size}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      {...rest}
    />
  )
}

Pagination.displayName = 'Pagination'

export default Pagination
