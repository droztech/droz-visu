import { globalCss } from "@stitches/react";

export default globalCss({
  "*, ::before, ::after": {
    boxSizing: "border-box",
  },

  html: {
    tabSize: 4,
    lineHeight: 1.3,
    "-webkit-text-size-adjust": "100%",
    fontFamily: "Arial, Helvetica, sans-serif",
  },

  body: {
    margin: 0,
  },

  hr: {
    height: 0,
    color: "inherit",
  },

  "b, strong": {
    fontWeight: "bolder",
  },

  "code, kbd, samp, pre": {
    fontFamily:
      "ui-monospace, SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace",
    fontSize: "1em",
  },

  small: {
    fontSize: "80%",
  },

  "sub, sup": {
    fontSize: "75%",
    lineHeight: 0,
    position: "relative",
    verticalAlign: "baseline",
  },

  sub: {
    bottom: "-0.25em",
  },

  sup: {
    top: "-0.5em",
  },

  table: {
    textIndent: 0,
    borderColor: "inherit",
  },

  "button, input, optgroup, select, textarea": {
    fontFamily: "inherit",
    fontSize: "100%",
    lineHeight: 1.3,
    margin: 0,
    outline: "none",
    maxWidth: "100%",
  },

  "button, select": {
    textTransform: "none",
  },

  'button, [type="button"], [type="reset"], [type="submit"]': {
    webkitAppearance: "button",
    border: "none",
  },

  "::-moz-focus-inner": {
    borderStyle: "none",
    padding: 0,
  },

  ":-moz-focusring": {
    outline: "1px dotted ButtonText",
  },

  ":-moz-ui-invalid": {
    boxShadow: "none",
  },

  legend: {
    padding: 0,
  },

  progress: {
    verticalAlign: "baseline",
  },

  "::-webkit-inner-spin-button, ::-webkit-outer-spin-button": {
    height: "auto",
  },

  '[type="search"]': {
    webkitAppearance: "textfield",
    outlineOffset: "-2px",
  },

  "::-webkit-search-decoration": {
    webkitAppearance: "none",
  },

  "::-webkit-file-upload-button": {
    webkitAppearance: "button",
    font: "inherit",
  },

  summary: {
    display: "list-item",
    marginBottom: "0.5rem",
  },

  a: {
    textDecoration: "none",
    color: "inherit",
  },

  img: {
    maxWidth: "100%",
    width: "fit-content",
  },

  "ul, ol": {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  p: {
    margin: 0,
  },

  "h1, h2,  h3,  h4,  h5,  h6": {
    margin: 0,
  },
});
