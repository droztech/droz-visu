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

const MenuRoot: FC<MenuRootProps> = ({
  children,
  className,
  expanded,
  side = 'left',
  ...rest
}) => {
  const sideClass = useMemo<string>(() => {
    return sideClassVariants[side]
  }, [side])

  return (
    <div
      className={clsx([
        className,
        'flex',
        'flex-col',
        'justify-between',
        'h-full',
        'w-full',
        'p-4',
        'bg-gray-100',
        'fixed',
        'transition-all',
        'overflow-hidden',
        'z-50',
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
