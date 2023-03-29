import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface SidebarGroupProps extends HTMLAttributes<HTMLDivElement> {}

const SidebarGroup: FC<SidebarGroupProps> = ({
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
