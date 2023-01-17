import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import * as Component from "./style";

// ========================= ROOT =========================

export interface ButtonRootProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonRoot = ({ children, ...rest }: ButtonRootProps): JSX.Element => {
  return <Component.Root {...rest}>{children}</Component.Root>;
};

ButtonRoot.displayName = "Button.Root";

// ========================= ICON =========================

export interface ButtonIconProps extends HTMLAttributes<HTMLDivElement> {}

const ButtonIcon = ({ children, ...rest }: ButtonIconProps): JSX.Element => {
  return <Component.Icon {...rest}>{children}</Component.Icon>;
};

ButtonRoot.displayName = "Button.Icon";

// ========================= EXPORTS =========================

const Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon,
};

export default Button;
