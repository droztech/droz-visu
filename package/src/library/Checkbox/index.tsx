import { cn } from '@/src/utils/class-merge.helper'
import { Color, ColorClass } from '@types'

import { Check } from '@phosphor-icons/react'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { forwardRef } from 'react'

const colorVariants: ColorClass = {
  primary: {
    root: 'data-[state=checked]:bg-primary data-[state=checked]:border-primary border-gray hover:border-primary active:border-primary active:bg-primary',
  },
  secondary: {
    root: 'data-[state=checked]:bg-secondary data-[state=checked]:border-secondary border-gray hover:border-secondary active:border-secondary active:bg-secondary',
  },
}

export interface CheckboxProps
  extends Omit<
    RadixCheckbox.CheckboxProps,
    'value' | 'onChange' | 'onCheckedChange'
  > {
  color?: Color
  value?: boolean
  onChange?: (data: boolean) => void
  onCheckedChange?: (data: boolean) => void
}

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
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
          colorVariants[color].root,
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

Checkbox.displayName = 'Checkbox'

export default Checkbox
