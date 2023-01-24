import { styled } from "@/stitches.config";

export const Icon = styled("div", {
  height: "$6",
  width: "$6",

  "svg, img": {
    height: "100%",
    width: "100%",
  },
});

export const Input = styled("input", {
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  height: "$10",

  "&:placeholder": {
    color: "$gray400",
  },
});

export const Root = styled("div", {
  color: "$gray500",
  display: "flex",
  alignItems: "center",
  border: "1px solid $gray500",
  borderRadius: "$md",
  padding: "0 $2",
  gap: "$1",

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
