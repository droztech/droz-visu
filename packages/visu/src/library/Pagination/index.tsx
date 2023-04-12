import { clsx } from 'clsx'
import { FC } from 'react'
import ReactPaginate, { ReactPaginateProps } from 'react-paginate'

export interface PaginationProps
  extends Omit<ReactPaginateProps, 'onPageChange'> {
  current: number
  onPageChange: (data: number) => void
  disabled?: boolean
}

const Pagination: FC<PaginationProps> = ({
  current,
  onPageChange,
  disabled,
  ...rest
}) => {
  return (
    <ReactPaginate
      className="flex items-center gap-1"
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
      forcePage={current}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => onPageChange(selected)}
      {...rest}
    />
  )
}

export default Pagination
