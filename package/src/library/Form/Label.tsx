import { Tooltip, TooltipHoverProps } from '@droz-js/visu'
import { Question } from '@phosphor-icons/react'
import { clsx } from 'clsx'
import { FC, HTMLAttributes } from 'react'

export interface FormLabelProps extends HTMLAttributes<HTMLDivElement> {
  tooltip?: TooltipHoverProps['content']
}

const FormLabel: FC<FormLabelProps> = ({
  tooltip,
  children,
  className,
  ...rest
}) => {
  return (
    <span className={clsx('flex items-center gap-2', className)} {...rest}>
      {children}
      {tooltip && (
        <Tooltip.Hover className="text-center" content={tooltip}>
          <Question />
        </Tooltip.Hover>
      )}
    </span>
  )
}

FormLabel.displayName = 'FormLabel'

export default FormLabel