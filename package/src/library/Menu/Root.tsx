import { cn } from '@/src/utils/class-merge.helper'
import { Side, SideClass } from '@types'

import { FC, HTMLAttributes } from 'react'

const sideVariants: SideClass = {
  left: { root: '-translate-x-full' },
  right: { root: 'translate-x-full' },
}

export interface MenuRootProps extends HTMLAttributes<HTMLDivElement> {
  expanded: boolean
  side?: Side
}

const MenuRoot: FC<MenuRootProps> = ({
  children,
  className,
  expanded,
  side = 'left',
  ...rest
}) => {
  return (
    <div
      className={cn(
        'fixed z-30 flex h-full w-full flex-col overflow-hidden bg-gray-100 px-4 transition-all',
        expanded ? 'translate-x-0' : sideVariants[side].root,
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

MenuRoot.displayName = 'Menu.Root'

export default MenuRoot
