import Tooltip from '../Tooltip'
import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface SidebarButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element
  text: string
}

const SidebarButton: FC<SidebarButtonProps> = ({ className, icon, text, ...rest }) => {
  return (
    <button
      className={clsx([
        className,
        'flex w-full flex-row items-center gap-2 rounded-lg px-2 py-2 transition-colors hover:bg-primary hover:text-gray-100 [&:hover_svg]:text-gray-100 [&_svg]:text-primary',
      ])}
      {...rest}
    >
      <Tooltip.Hover text={text} side="right">
        <div className="mx-auto [&>svg]:h-6 [&>svg]:w-6">{icon}</div>
      </Tooltip.Hover>
      <span className="flex-1 text-left text-sm">{text}</span>
    </button>
  )
}

SidebarButton.displayName = 'Sidebar.Button'

export default SidebarButton
