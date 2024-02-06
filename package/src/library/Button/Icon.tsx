import { cn } from '@/src/utils/class-merge.helper'

import { FC, HTMLAttributes } from 'react'

export interface ButtonIconProps extends HTMLAttributes<HTMLDivElement> {}

const ButtonIcon: FC<ButtonIconProps> = ({ children, className, ...rest }) => {
  return (
    <div
      className={cn(className, 'h-6 w-6 [&_svg]:h-full [&_svg]:w-full')}
      {...rest}
    >
      {children}
    </div>
  )
}

ButtonIcon.displayName = 'Button.Icon'

export default ButtonIcon
