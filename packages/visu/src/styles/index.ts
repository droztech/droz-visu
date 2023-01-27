import { styled } from "@/stitches.config";

export const Main = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "$background",
  color: "$gray50",
});

export const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
  maxWidth: "768px",
  width: "95vw",

  variants: {
    col: {
      true: {
        flexDirection: "column",
      },
    },
  },
});
