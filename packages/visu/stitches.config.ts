import { createStitches } from "@stitches/react";

const metrics = {
  1: "0.125rem", // 2px
  2: "0.25rem", // 4px
  3: "0.5rem", // 8px
  4: "1rem", // 16px
  5: "1.5rem", // 24px
  6: "2rem", // 32px
  7: "2.5rem", // 40px
};

const primaries = {
  primary300: "#AC85FF",
  primary400: "#7900F2",
  primary500: "#5300A7",
  primary600: "#3E007C",
  primary700: "#241534",
};

export const { styled, css } = createStitches({
  theme: {
    colors: {
      primary: primaries.primary400,
      ...primaries,
    },
    space: metrics,
    sizes: metrics,
    radii: {
      sm: "0.25rem",
      md: "0.5rem",
      lg: "3rem",
      full: "50%",
    },
  },
});
