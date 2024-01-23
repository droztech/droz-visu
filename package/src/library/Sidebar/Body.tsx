import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface SidebarBodyProps extends HTMLAttributes<HTMLDivElement> {}

const SidebarBody: FC<SidebarBodyProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col py-4 justify-between h-full w-full gap-2',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

SidebarBody.displayName = 'Sidebar.Body'

export default SidebarBody
