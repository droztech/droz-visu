import {
  HTMLAttributes,
  ComponentProps,
  InputHTMLAttributes,
  useRef,
} from "react";
import * as Component from "./style";

// ========================= ROOT =========================

export interface InputRootProps
  extends HTMLAttributes<HTMLDivElement>,
    ComponentProps<typeof Component.Root> {}

const InputRoot = ({ children, ...rest }: InputRootProps): JSX.Element => {
  return <Component.Root {...rest}>{children}</Component.Root>;
};

InputRoot.displayName = "Input.Root";

// ========================= INPUT =========================

export interface InputInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    ComponentProps<typeof Component.Input> {}

const InputInput = ({ children, ...rest }: InputInputProps): JSX.Element => {
  return <Component.Input {...rest} />;
};

InputInput.displayName = "Input.Input";

// ========================= ICON =========================

export interface InputIconProps
  extends HTMLAttributes<HTMLDivElement>,
    ComponentProps<typeof Component.Icon> {
  // position: "left" | "right";
}

const InputIcon = ({ children, ...rest }: InputIconProps): JSX.Element => {
  const ref = useRef(null);

  const abc = () => {
    const el = ref.current;
    console.log(el);
  };

  return (
    <Component.Icon ref={ref} onClick={abc} {...rest}>
      {children}
    </Component.Icon>
  );
};

InputRoot.displayName = "Input.Icon";

// ========================= EXPORTS =========================

const Input = {
  Root: InputRoot,
  Input: InputInput,
  Icon: InputIcon,
};

export default Input;
