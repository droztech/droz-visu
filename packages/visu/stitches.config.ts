import { createStitches } from "@stitches/react";

const metrics = {
  0.5: "0.125rem", // 2px
  1: "0.25rem", // 4px
  "1half": "0.375rem", // 6px
  2: "0.5rem", // 8px
  "2half": "0.625rem", // 10px
  3: "0.75rem", // 12px
  "3half": "0.875rem", // 14px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  7: "1.75rem", // 28px
  8: "2rem", // 32px
  9: "2.25rem", // 36px
  10: "2.5rem", // 40px
  11: "2.75rem", // 44px
  12: "3rem", // 48px
  14: "3.5rem", // 56px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  28: "7rem", // 112px
  32: "8rem", // 128px
  36: "9rem", // 144px
  40: "10rem", // 160px
  44: "11rem", // 176px
  48: "12rem", // 192px
  52: "13rem", // 208px
  56: "14rem", // 224px
  60: "15rem", // 240px
  64: "16rem", // 256px
  72: "18rem", // 288px
  80: "20rem", // 320px
  96: "24rem", // 384px
};

const backgroundColor = "#FFFFFF";

const grayColors = {
  gray100: "#FFFFFF",
  gray200: "#F8F8F8",
  gray300: "#ECECEC",
  gray400: "#C8C8C8",
  gray500: "#888888",
  gray600: "#616161",
  gray700: "#474747",
  gray800: "#303030",
  gray900: "#000000",
};

const primaryColors = {
  primary300: "#AC85FF",
  primary400: "#7900F2",
  primary500: "#5300A7",
  primary600: "#3E007C",
  primary700: "#241534",
};

const secondaryColors = {
  secondary300: "#FDA562",
  secondary400: "#FD6D01",
  secondary500: "#E36100",
  secondary600: "#C35400",
  secondary700: "#A14600",
};

const successColors = {
  success300: "#EDF7F5",
  success400: "#32C09D",
  success500: "#248870",
  success600: "#1B6553",
  success700: "#144A3D",
};

const errorColors = {
  error300: "#FDEDF2",
  error400: "#F20045",
  error500: "#CC003A",
  error600: "#99002B",
  error700: "#66001D",
};

const alertColors = {
  alert300: "#FFF4E5",
  alert400: "#FFA624",
  alert500: "#E08401",
  alert600: "#B56A00",
  alert700: "#663C00",
};

export const { styled, css } = createStitches({
  theme: {
    colors: {
      background: backgroundColor,
      gray: grayColors.gray400,
      primary: primaryColors.primary400,
      secondary: secondaryColors.secondary400,
      success: successColors.success400,
      error: errorColors.error400,
      alert: alertColors.alert400,

      ...grayColors,
      ...primaryColors,
      ...secondaryColors,
      ...successColors,
      ...errorColors,
      ...alertColors,
    },
    space: metrics,
    sizes: metrics,
    radii: {
      sm: "0.25rem",
      md: "0.5rem",
      lg: "3rem",
      full: "50%",
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      "2xl": "3rem",
      "3xl": "4rem",
    },
    transitions: {
      fast: "100ms",
      normal: "150ms",
      slow: "300ms",
    },
    shadows: {
      sm: "0px 0.125rem 1rem 0px #000000",
      md: "0px 0.25rem 1.5rem 0px #000000",
      lg: "0px 0.375rem 2rem 0px #000000",
    },
  },
});
