import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface ButtonIconProps extends HTMLAttributes<HTMLDivElement> {}

const ButtonIcon: FC<ButtonIconProps> = ({ children, className, ...rest }) => {
  return (
    <div className={clsx([className, 'w-6', 'h-6', '[&_svg]:h-full', '[&_svg]:w-full'])} {...rest}>
      {children}
    </div>
  )
}

ButtonIcon.displayName = 'Button.Icon'

export default ButtonIcon
