import { FC, HTMLAttributes } from 'react'

export interface FormTextProps extends HTMLAttributes<HTMLDivElement> {
  isShowing?: boolean
}

const FormText: FC<FormTextProps> = ({ isShowing, children, ...rest }) => {
  return (
    isShowing && (
      <span className="text-xs text-error" {...rest}>
        {children}
      </span>
    )
  )
}

FormText.displayName = 'FormText'

export default FormText
