import * as RadixRadio from '@radix-ui/react-radio-group'
import { FC } from 'react'

export interface RadioRootProps extends RadixRadio.RadioGroupProps {}

const RadioRoot: FC<RadioRootProps> = ({ children, ...rest }) => {
  return <RadixRadio.Root {...rest}>{children}</RadixRadio.Root>
}

RadioRoot.displayName = 'Radio.Root'

export default RadioRoot
