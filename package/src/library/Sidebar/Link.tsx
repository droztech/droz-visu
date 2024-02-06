import Tooltip from '../Tooltip'

import { cn } from '@/src/utils/class-merge.helper'

import { AnchorHTMLAttributes, FC } from 'react'

export interface SidebarLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: JSX.Element
  text: string
}

const SidebarLink: FC<SidebarLinkProps> = ({
  className,
  icon,
  text,
  ...rest
}) => {
  return (
    <a
      className={cn(
        className,
        'flex w-full flex-row items-center gap-2 rounded-lg px-2 py-2 transition-colors hover:bg-primary hover:text-gray-100 [&:hover_svg]:text-gray-100 [&_svg]:text-primary',
      )}
      {...rest}
    >
      <Tooltip.Hover text={text} side="right">
        <div className="mx-auto [&>svg]:h-6 [&>svg]:w-6">{icon}</div>
      </Tooltip.Hover>
      <span className="flex-1 text-left text-sm">{text}</span>
    </a>
  )
}

SidebarLink.displayName = 'Sidebar.Link'

export default SidebarLink
