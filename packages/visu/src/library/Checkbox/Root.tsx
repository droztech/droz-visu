import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { CheckboxColor, CheckboxColorClass } from '@types'
import { clsx } from 'clsx'
import { FC, useMemo } from 'react'

export interface CheckboxRootProps extends RadixCheckbox.CheckboxProps {
  color?: CheckboxColor
}

export const rootColorVariants: CheckboxColorClass = {
  primary:
    'data-[state=checked]:bg-primary data-[state=checked]:border-primary border-gray hover:border-primary active:border-primary active:bg-primary',
  secondary:
    'data-[state=checked]:bg-secondary data-[state=checked]:border-secondary border-gray hover:border-secondary active:border-secondary active:bg-secondary',
}

const CheckboxRoot: FC<CheckboxRootProps> = ({
  children,
  className,
  color = 'primary',
  disabled,
  ...rest
}) => {
  const colorClass = useMemo(() => {
    return rootColorVariants[color]
  }, [color])

  const disabledClass = useMemo(() => {
    return disabled
      ? 'data-[state=checked]:!bg-gray-400 data-[state=checked]:!border-gray !bg-gray-300 !border-gray'
      : ''
  }, [disabled])

  return (
    <RadixCheckbox.Root
      className={clsx([
        className,
        'border-2',
        'text-gray-100',
        'w-4',
        'h-4',
        'transition-all',
        'flex',
        'items-center',
        'justify-center',
        'rounded-sm',
        'overflow-hidden',
        colorClass,
        disabledClass,
      ])}
      disabled={disabled}
      {...rest}
    >
      {children}
    </RadixCheckbox.Root>
  )
}

CheckboxRoot.displayName = 'Checkbox.Root'

export default CheckboxRoot
