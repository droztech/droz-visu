import { styled } from "@/stitches.config";

export const Icon = styled("div", {
  height: "$6",
  width: "$6",

  "svg, img": {
    height: "100%",
    width: "100%",
  },
});

export const Root = styled("button", {
  display: "flex",
  gap: "$2half",
  alignItems: "center",
  borderRadius: "$md",
  border: "none",
  cursor: "pointer",
  backgroundColor: "$primary",
  color: "$gray100",
  transition: "all $normal",

  "&:hover": {
    backgroundColor: "$primary500",
  },

  "&:active": {
    backgroundColor: "$primary600",
  },

  "&:disabled": {
    backgroundColor: "$gray",
    pointerEvents: "none",
  },

  variants: {
    size: {
      sm: {
        padding: "$2half $6",
        fontSize: "$sm",
        height: "$10",
      },
      md: {
        padding: "$3 $10",
        height: "$12",
      },
      lg: {
        padding: "$9 $12",
        fontSize: "lg",
        height: "$28",

        [`& ${Icon}`]: {
          height: "$10",
          width: "$10",
        },
      },
    },
    ghost: {
      true: {
        border: "1px solid $primary",
        color: "$primary",
        backgroundColor: "transparent",

        "&:hover": {
          borderColor: "$primary500",
          color: "$primary500",
          backgroundColor: "transparent",
        },

        "&:active": {
          borderColor: "$primary600",
          color: "$primary600",
          backgroundColor: "transparent",
        },

        "&:disabled": {
          borderColor: "$gray",
          color: "$gray",
          backgroundColor: "transparent",
        },
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
