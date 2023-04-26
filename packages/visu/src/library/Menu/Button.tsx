import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface MenuButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element
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
      <div className="[&>svg]:w-6 [&>svg]:h-6 mx-auto">{icon}</div>
      <span className="text-sm flex-1 text-left">{text}</span>
    </button>
  )
}

MenuButton.displayName = 'Menu.Button'

export default MenuButton
