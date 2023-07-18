import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface SidebarLayoutProps extends HTMLAttributes<HTMLDivElement> {}

const SidebarLayout: FC<SidebarLayoutProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={clsx([
        className,
        'flex flex-row w-full [&>*:nth-child(2)]:w-full',
      ])}
      {...rest}
    >
      {children}
    </div>
  )
}

SidebarLayout.displayName = 'Sidebar.Layout'

export default SidebarLayout
