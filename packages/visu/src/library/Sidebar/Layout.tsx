import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface SidebarLayoutProps extends HTMLAttributes<HTMLDivElement> {}

const SidebarLayout: FC<SidebarLayoutProps> = ({
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
