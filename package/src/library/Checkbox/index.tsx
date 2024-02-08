import { cn } from '@/src/utils/class-merge.helper'

import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { forwardRef } from 'react'

const rootColorVariants = {
  primary:
    'data-[state=checked]:bg-primary data-[state=checked]:border-primary border-gray hover:border-primary active:border-primary active:bg-primary',
  secondary:
    'data-[state=checked]:bg-secondary data-[state=checked]:border-secondary border-gray hover:border-secondary active:border-secondary active:bg-secondary',
}

export interface CheckboxRootProps
  extends Omit<
    RadixCheckbox.CheckboxProps,
    'value' | 'onChange' | 'onCheckedChange'
  > {
  color?: keyof typeof rootColorVariants
  value?: boolean
  onChange?: (data: boolean) => void
  onCheckedChange?: (data: boolean) => void
}

const CheckboxRoot = forwardRef<HTMLButtonElement, CheckboxRootProps>(
  (
    {
      children,
      className,
      color = 'primary',
      disabled,
      onCheckedChange,
      onChange,
      checked,
      value,
      ...rest
    },
    ref,
  ) => {
    const handleCheck = (ev: RadixCheckbox.CheckedState) => {
      if (ev === 'indeterminate') ev = false
      if (onChange) {
        return onChange(ev)
      }
      if (onCheckedChange) {
        return onCheckedChange(ev)
      }
    }

    return (
      <RadixCheckbox.Root
        className={cn(
          'flex h-4 w-4 items-center justify-center overflow-hidden rounded-sm border-2 text-gray-100 transition-all',
          rootColorVariants[color],
          disabled &&
            '!border-gray !bg-gray-300 data-[state=checked]:!border-gray data-[state=checked]:!bg-gray-400',
          className,
        )}
        disabled={disabled}
        ref={ref}
        checked={value ?? checked}
        onCheckedChange={(ev) => handleCheck(ev)}
        {...rest}
      >
        <RadixCheckbox.Indicator>
          {children ?? <Check />}
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    )
  },
)

CheckboxRoot.displayName = 'Checkbox'

export default CheckboxRoot
