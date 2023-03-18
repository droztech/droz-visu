import clsx from 'clsx'
import { HTMLAttributes } from 'react'

export interface ButtonIconV2Props extends HTMLAttributes<HTMLDivElement> {}

const ButtonIconV2 = ({ children, ...rest }: ButtonIconV2Props) => {
  return (
    <div
      className={clsx(['w-6', 'h-6', '[&_svg]:h-full', '[&_svg]:w-full'])}
      {...rest}
    >
      {children}
    </div>
  )
}

ButtonIconV2.displayName = 'Button.Icon'

export default ButtonIconV2
