import { styled } from "@/stitches.config";

export const Root = styled("span", {
  variants: {
    underline: {
      true: {
        textDecoration: "underline",
        textUnderlineOffset: "3px",
      },
    },
    size: {
      xs: {
        fontSize: "$xs",
      },
      sm: {
        fontSize: "$sm",
      },
      md: {
        fontSize: "$md",
      },
      lg: {
        fontSize: "lg",
      },
      xl: {
        fontSize: "$xl",
      },
      "2xl": {
        fontSize: "$2xl",
      },
      "3xl": {
        fontSize: "$3xl",
      },
    },
    colored: {
      gray100: { color: "$gray100" },
      gray400: { color: "$gray400" },
      gray900: { color: "$gray900" },
      primary400: { color: "$primary400" },
      secondary400: { color: "$secondary400" },
      success400: { color: "$success400" },
      error400: { color: "$error400" },
      alert400: { color: "$alert400" },
    },
  },
  defaultVariants: {
    size: "md",
    colored: "gray900",
  },
});
