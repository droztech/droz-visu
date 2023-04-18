import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface SidebarDividerProps extends HTMLAttributes<HTMLDivElement> {}

const SidebarDivider: FC<SidebarDividerProps> = ({ className, ...rest }) => {
  return (
    <div
      className={clsx([className, 'border-b', 'border-gray-300', 'my-2'])}
      {...rest}
    />
  )
}

SidebarDivider.displayName = 'Sidebar.Divider'

export default SidebarDivider
