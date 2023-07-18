import Tooltip from '../Tooltip'
import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface SidebarButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element
  text: string
}

const SidebarButton: FC<SidebarButtonProps> = ({
  className,
  icon,
  text,
  ...rest
}) => {
  return (
    <button
      className={clsx([
        className,
        'hover:bg-primary [&_svg]:text-primary flex w-full flex-row items-center gap-2 rounded-lg px-2 py-2 transition-colors hover:text-gray-100 [&:hover_svg]:text-gray-100',
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
