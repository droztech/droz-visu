import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { FC } from 'react'

export interface CheckboxIndicatorProps
  extends RadixCheckbox.CheckboxIndicatorProps {}

const CheckboxIndicator: FC<CheckboxIndicatorProps> = ({
  children,
  ...rest
}) => {
  return (
    <RadixCheckbox.Indicator {...rest}>
      {children ?? <Check />}
    </RadixCheckbox.Indicator>
  )
}

CheckboxIndicator.displayName = 'Checkbox.Indicator'

export default CheckboxIndicator
