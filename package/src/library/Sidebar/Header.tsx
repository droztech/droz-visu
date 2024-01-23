import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface SidebarHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const SidebarHeader: FC<SidebarHeaderProps> = ({ children, className, ...rest }) => {
  return (
    <div className={clsx('border-b border-gray-300 px-2 py-6', className)} {...rest}>
      {children}
    </div>
  )
}

SidebarHeader.displayName = 'Sidebar.Header'

export default SidebarHeader
