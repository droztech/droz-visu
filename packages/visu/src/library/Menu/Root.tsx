import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface MenuRootProps extends HTMLAttributes<HTMLDivElement> {
  expanded: boolean
  side?: 'right' | 'left'
}

const rootSideVariants = {
  left: '-translate-x-full',
  right: 'translate-x-full',
}

const MenuRoot: FC<MenuRootProps> = ({
  expanded,
  side = 'left',
  children,
  className,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        'flex flex-col justify-between h-full w-screen p-4 bg-gray-100 fixed transition-all overflow-hidden',
        expanded ? 'translate-x-0' : rootSideVariants[side],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

export default MenuRoot
