import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface SidebarHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const SidebarHeader: FC<SidebarHeaderProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={clsx('px-2 py-6 border-b border-gray-300', className)}
      {...rest}
    >
      {children}
    </div>
  )
}

SidebarHeader.displayName = 'Sidebar.Header'

export default SidebarHeader
