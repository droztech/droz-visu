import { ButtonHTMLAttributes, ComponentProps, HTMLAttributes } from 'react'

import * as Component from './style'

// ========================= ROOT =========================

export interface ButtonRootProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ComponentProps<typeof Component.Root> {
  children: React.ReactNode
}

const ButtonRoot = ({ children, ...rest }: ButtonRootProps): JSX.Element => {
  return <Component.Root {...rest}>{children}</Component.Root>
}

ButtonRoot.displayName = 'Button.Root'

// ========================= ICON =========================

export interface ButtonIconProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

const ButtonIcon = ({ children, ...rest }: ButtonIconProps): JSX.Element => {
  return <Component.Icon {...rest}>{children}</Component.Icon>
}

ButtonIcon.displayName = 'Button.Icon'

// ========================= EXPORTS =========================

const Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon,
}

export default Button
