import { FC, FormHTMLAttributes } from 'react'

export interface FormRootProps
  extends Omit<FormHTMLAttributes<HTMLFormElement>, 'handleSubmit'> {
  onSubmit?: (data: any) => void
}

const FormRoot: FC<FormRootProps> = ({ children, ...rest }) => {
  return (
    <form className="flex flex-col gap-4 text-left" {...rest}>
      {children}
    </form>
  )
}

FormRoot.displayName = 'FormRoot'

export default FormRoot
