import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface SidebarButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element
}

const SidebarButton: FC<SidebarButtonProps> = ({
  icon,
  children,
  className,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        'rounded-lg flex items-center flex-row px-2 py-2 transition-colors gap-2 hover:bg-primary hover:text-gray-100 [&_svg]:text-primary [&:hover_svg]:text-gray-100',
        className
      )}
      {...rest}
    >
      <div className="[&>svg]:w-6 [&>svg]:h-6 mx-auto">{icon}</div>
      <span className="text-sm flex-1 text-left">{children}</span>
    </button>
  )
}

export default SidebarButton
