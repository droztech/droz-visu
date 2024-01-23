import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {}

const Divider: FC<DividerProps> = ({ children, className, ...rest }) => {
  return (
    <div className={clsx('flex w-full items-center', className)} {...rest}>
      <hr className="flex-1 border-gray-300" />
      {children && <span className="mx-4">{children}</span>}
      <hr className="flex-1 border-gray-300" />
    </div>
  )
}

Divider.displayName = 'Divider'

export default Divider
