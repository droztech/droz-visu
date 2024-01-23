import { Side, SideClass } from '@types'
import { clsx } from 'clsx'
import { FC, HTMLAttributes, useMemo } from 'react'

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
    return sideClassVariants[side]
  }, [side])

  return (
    <div
      className={clsx([
        className,
        'fixed z-50 flex h-full w-full flex-col overflow-hidden bg-gray-100 px-4 transition-all',
        expanded ? 'translate-x-0' : sideClass,
      ])}
      {...rest}
    >
      {children}
    </div>
  )
}

MenuRoot.displayName = 'Menu.Root'

export default MenuRoot
