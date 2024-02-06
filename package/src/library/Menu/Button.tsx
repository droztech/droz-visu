import { cn } from '@/src/utils/class-merge.helper'

import { FC, HTMLAttributes } from 'react'

export interface MenuButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon?: JSX.Element
  text: string
}

const MenuButton: FC<MenuButtonProps> = ({
  className,
  icon,
  text,
  ...rest
}) => {
  return (
    <button
      className={cn(
        className,
        'flex w-full flex-row items-center gap-2 rounded-lg px-2 py-2 transition-colors hover:bg-primary hover:text-gray-100 [&:hover_svg]:text-gray-100 [&_svg]:text-primary',
      )}
      {...rest}
    >
      {icon && <div className="mx-auto [&>svg]:h-6 [&>svg]:w-6">{icon}</div>}
      <span className="flex-1 text-left text-sm">{text}</span>
    </button>
  )
}

MenuButton.displayName = 'Menu.Button'

export default MenuButton
