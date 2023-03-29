import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

const SidebarDivider: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={clsx('border-b border-gray-300 my-2', className)}
      {...rest}
    />
  )
}

export default SidebarDivider
