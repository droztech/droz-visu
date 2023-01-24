import { globalCss } from "@stitches/react";

export const componentsStyle = globalCss({
  "*": {
    fontSize: "1rem",
    boxSizing: "border-box",
  },
  "*:focus:not(:active)": {
    outline: "0.2rem solid $gray900",
    outlineOffset: "0.2rem",
  },
});

export const appStyle = globalCss({
  "@import":
    "url('https://fonts.googleapis.com/css2?family=Kanit&display=swap')",

  "*": {
    fontFamily: "'Kanit', sans-serif",
  },
  body: {
    margin: 0,
  },
});
