import FormGroup from './Group'
import FormLabel from './Label'
import FormMessage from './Message'
import FormRoot from './Root'

export type { FormGroupProps } from './Group'
export type { FormLabelProps } from './Label'
export type { FormRootProps } from './Root'
export type { FormMessageProps } from './Message'

const Form = {
  Group: FormGroup,
  Label: FormLabel,
  Root: FormRoot,
  Message: FormMessage,
}

export default Form
