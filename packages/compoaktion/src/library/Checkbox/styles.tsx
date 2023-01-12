import { styled } from "@stitches/react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";

export const RadixCheckboxRoot = styled(RadixCheckbox.Root, {
  backgroundColor: "White",
  width: "25px",
  height: "25px",
  border: "none",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.14)",

  "&:hover": {
    backgroundColor: "rgb(245, 242, 255)",
  },

  "&:focus": {
    boxShadow: "0 0 0 2px rgb(209, 196, 252)",
  },
});

export const RadixCheckboxIndicator = styled(RadixCheckbox.Indicator, {
  color: "rgb(87, 70, 175)",
});
