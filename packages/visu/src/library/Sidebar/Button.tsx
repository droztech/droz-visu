import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

import Tooltip from '../Tooltip'

export interface SidebarButtonProps extends HTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  icon: JSX.Element
  text: string
}

const SidebarButton: FC<SidebarButtonProps> = ({
  asChild,
  className,
  icon,
  text,
  ...rest
}) => {
  const RootComponent = asChild ? Slot : 'button'

  return (
    <RootComponent
      className={clsx([
        className,
        'rounded-lg',
        'flex',
        'items-center',
        'flex-row',
        'px-2',
        'py-2',
        'transition-colors',
        'gap-2',
        'hover:bg-primary',
        'hover:text-gray-100',
        '[&_svg]:text-primary',
        '[&:hover_svg]:text-gray-100',
      ])}
      {...rest}
    >
      <Tooltip.Hover text={text} side="right">
        <div className="[&>svg]:w-6 [&>svg]:h-6 mx-auto">{icon}</div>
      </Tooltip.Hover>
      <span className="text-sm flex-1 text-left">{text}</span>
    </RootComponent>
  )
}

SidebarButton.displayName = 'Sidebar.Button'

export default SidebarButton
