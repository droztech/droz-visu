import { Side, SideClass } from '@types'
import { FC, HTMLAttributes, useMemo } from 'react'
import { cn } from '@/src/utils/class-merge.helper'

export interface MenuRootProps extends HTMLAttributes<HTMLDivElement> {
  expanded: boolean
  side?: Side
}

const sideClassVariants: SideClass = {
  left: '-translate-x-full',
  right: 'translate-x-full',
}

const MenuRoot: FC<MenuRootProps> = ({ children, className, expanded, side = 'left', ...rest }) => {
  const sideClass = useMemo<string>(() => {
    return expanded ? 'translate-x-0' : sideClassVariants[side]
  }, [expanded, side])

  return (
    <div
      className={cn(
        className,
        'fixed z-50 flex h-full w-full flex-col overflow-hidden bg-gray-100 px-4 transition-all',
        sideClass,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

MenuRoot.displayName = 'Menu.Root'

export default MenuRoot
