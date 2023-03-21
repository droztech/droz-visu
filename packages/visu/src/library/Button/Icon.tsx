import { clsx } from 'clsx'
import { HTMLAttributes } from 'react'

export interface ButtonIconProps extends HTMLAttributes<HTMLDivElement> {}

const ButtonIcon = ({ children, className, ...rest }: ButtonIconProps) => {
  return (
    <div
      className={clsx([
        className,
        'w-6',
        'h-6',
        '[&_svg]:h-full',
        '[&_svg]:w-full',
      ])}
      {...rest}
    >
      {children}
    </div>
  )
}

ButtonIcon.displayName = 'Button.Icon'

export default ButtonIcon
