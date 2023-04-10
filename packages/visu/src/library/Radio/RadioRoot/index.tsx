import * as RadixRadio from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'
import { FC } from 'react'

export interface RadioRootProps extends RadixRadio.RadioGroupProps {}

const RadioRoot: FC<RadioRootProps> = ({ children, className, ...rest }) => {
  return (
    <RadixRadio.Root className={clsx('', className)} {...rest}>
      {children}
    </RadixRadio.Root>
  )
}

export default RadioRoot
