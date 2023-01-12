import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...rest }: ButtonProps): JSX.Element => {
  return (
    <button
      {...rest}
      style={{
        padding: "8px 32px",
        borderRadius: "4px",
        border: "none",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};
