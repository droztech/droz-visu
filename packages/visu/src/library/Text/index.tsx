import { HTMLAttributes, ComponentProps } from "react";
import * as Component from "./style";

// ========================= ROOT =========================

export interface TextRootProps
  extends HTMLAttributes<HTMLSpanElement>,
    ComponentProps<typeof Component.Root> {
  as?: keyof JSX.IntrinsicElements;
}

const Text = ({ children, ...rest }: TextRootProps): JSX.Element => {
  return <Component.Root {...rest}>{children}</Component.Root>;
};

// ========================= EXPORTS =========================

export default Text;
