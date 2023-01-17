import { styled } from "@/stitches.config";

export const Icon = styled("div", {
  height: "$5",
  width: "$5",

  "svg, img": {
    height: "100%",
    width: "100%",
  },
});

export const Root = styled("button", {
  display: "flex",
  height: "$7",
  gap: "$3",
  padding: "0 $5",
  alignItems: "center",
  borderRadius: "$md",
  border: "none",
  cursor: "pointer",
  backgroundColor: "$primary",
  color: "#F4F4F4",
  transition: "all 200ms",

  "&:hover": {
    backgroundColor: "$primary500",
  },

  variants: {
    size: {
      lg: {
        [`& ${Icon}`]: {
          height: "$7",
          width: "$7",
        },
      },
    },
  },
});
