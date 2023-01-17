import type {
  CheckboxProps as RadixCheckboxRootProps,
  CheckboxIndicatorProps as RadixCheckboxIndicatorProps,
} from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import * as Component from "./styles";

export interface CheckboxRootProps extends RadixCheckboxRootProps {}

const CheckboxRoot = ({ ...rest }: CheckboxRootProps): JSX.Element => {
  return <Component.RadixCheckboxRoot {...rest}></Component.RadixCheckboxRoot>;
};

export interface CheckboxIndicatorProps extends RadixCheckboxIndicatorProps {}

const CheckboxIndicator = ({
  ...rest
}: CheckboxIndicatorProps): JSX.Element => {
  return (
    <Component.RadixCheckboxIndicator {...rest}>
      <CheckIcon />
    </Component.RadixCheckboxIndicator>
  );
};

const Checkbox = {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator,
};

export default Checkbox;
