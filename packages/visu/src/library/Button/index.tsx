import { CSS } from '@/stitches.config'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps } from '@stitches/react'
import { ButtonHTMLAttributes, HTMLAttributes } from 'react'

import * as Component from './style'

// ========================= ROOT =========================

export interface ButtonRootProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof Component.RootStyle> {
  asChild?: boolean
  children: React.ReactNode
  css?: CSS
}

const ButtonRoot = ({
  children,
  asChild = false,
  css,
  ghost = false,
  light = false,
  full = false,
  size = 'md',
  ...rest
}: ButtonRootProps): JSX.Element => {
  const ComponentRoot = asChild ? Slot : 'button'

  return (
    <ComponentRoot
      className={Component.RootStyle({
        css,
        ghost,
        light,
        full,
        size,
      })}
      {...rest}
    >
      {children}
    </ComponentRoot>
  )
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
