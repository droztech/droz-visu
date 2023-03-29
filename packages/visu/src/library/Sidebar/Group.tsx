import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

const SidebarGroup: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={clsx('flex flex-col gap-2', className)} {...rest}>
      {children}
    </div>
  )
}

export default SidebarGroup
