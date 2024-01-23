import { SmallerSizes } from '@types'
import { clsx } from 'clsx'
import { FC, useMemo } from 'react'
import ReactPaginate, { ReactPaginateProps } from 'react-paginate'

export interface PaginationProps
  extends Omit<ReactPaginateProps, 'onPageChange'> {
  current: number
  onPageChange: (data: number) => void
  disabled?: boolean
  size?: SmallerSizes
}

const Pagination: FC<PaginationProps> = ({
  current,
  onPageChange,
  disabled,
  size = 'md',
  className,
  ...rest
}) => {
  const paginateSize = useMemo<number>(() => {
    return size === 'md' ? 3 : 1
  }, [size])

  return (
    <ReactPaginate
      className={clsx('flex items-center gap-1', className)}
      nextLabel="›"
      previousLabel="‹"
      activeClassName={clsx(
        'pointer-events-none !text-gray-100',
        disabled ? 'bg-gray-400' : 'bg-primary-400'
      )}
      pageClassName={clsx(
        'w-8 h-8 flex items-center justify-center rounded-full',
        disabled ? 'text-gray-400 pointer-events-none' : 'text-gray-600'
      )}
      nextClassName={clsx(
        'flex items-center justify-center [&>*]:text-lg [&>*]:px-1',
        disabled ? 'text-gray-400 pointer-events-none' : 'text-gray-600'
      )}
      previousClassName={clsx(
        'flex items-center justify-center [&>*]:text-lg [&>*]:px-1',
        disabled ? 'text-gray-400 pointer-events-none' : 'text-gray-600'
      )}
      breakClassName={clsx(
        'flex items-center justify-center',
        disabled ? 'text-gray-400 pointer-events-none' : 'text-gray-600'
      )}
      disabledClassName="pointer-events-none text-gray-400"
      forcePage={current - 1}
      pageRangeDisplayed={paginateSize}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      {...rest}
    />
  )
}

Pagination.displayName = 'Pagination'

export default Pagination
