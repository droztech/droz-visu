import { styled } from "@/stitches.config";

export const Input = styled("input", {
  border: "none",
  outline: "none !important",
  backgroundColor: "transparent",
  padding: "0 $4",
  height: "$10",
  zIndex: 1,

  "&:placeholder": {
    color: "$gray400",
  },
});

export const Icon = styled("div", {
  height: "$6",
  width: "$6",
  position: "absolute",
  margin: "0 $2",

  "svg, img": {
    height: "100%",
    width: "100%",
  },

  variants: {
    position: {
      left: {
        left: 0,

        [`& ~ ${Input}`]: {
          paddingLeft: "$10",
        },
      },
      right: {
        right: 0,

        [`& ~ ${Input}`]: {
          paddingRight: "$10",
        },
      },
    },
  },
});

export const Root = styled("div", {
  color: "$gray500",
  display: "flex",
  alignItems: "center",
  border: "1px solid $gray500",
  borderRadius: "$md",
  position: "relative",
  width: "fit-content",

  "&:focus-within": {
    border: "1px solid $primary",
  },

  [`&:focus-within:has(> ${Input}:placeholder-shown)`]: {
    outline: "0.2rem solid $gray900",
    outlineOffset: "0.2rem",
  },

  [`&:focus-within:has(> ${Input}:invalid)`]: {
    border: "1px solid $error",
  },

  variants: {
    border: {
      error: {
        border: "1px solid $error",
      },
      success: {
        border: "1px solid $success",
      },
    },
  },
});
