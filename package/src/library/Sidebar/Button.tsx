import Tooltip from '../Tooltip'

import { cn } from '@/src/utils/class-merge.helper'

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
      className={cn(
        'flex w-full flex-row items-center  rounded-lg px-2 py-2 transition-colors hover:bg-primary hover:text-gray-100 [&:hover_svg]:text-gray-100 [&_svg]:text-primary',
        className,
      )}
      {...rest}
    >
      <Tooltip.Hover content={text} side="right" delayDuration={0}>
        <div className="mx-auto inline-table [&>svg]:h-6 [&>svg]:w-6">
          {icon}
        </div>
      </Tooltip.Hover>
      <span className="flex-1 pl-2 text-left text-sm">{text}</span>
    </button>
  )
}

SidebarButton.displayName = 'Sidebar.Button'

export default SidebarButton
