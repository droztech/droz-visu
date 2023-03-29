import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

const SidebarLayout: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={clsx('flex flex-row w-full', className)} {...rest}>
      {children}
    </div>
  )
}

export default SidebarLayout
