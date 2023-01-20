import { globalCss } from "@stitches/react";

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