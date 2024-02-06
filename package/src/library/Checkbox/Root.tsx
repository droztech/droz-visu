import { cn } from '@/src/utils/class-merge.helper'
import { Color, ColorClass } from '@types'

import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { Ref, forwardRef, useImperativeHandle, useMemo, useRef } from 'react'

export interface CheckboxRootProps
  extends Omit<
    RadixCheckbox.CheckboxProps,
    'value' | 'onChange' | 'onCheckedChange'
  > {
  color?: Color
  value?: boolean
  onChange?: (data: boolean) => void
  onCheckedChange?: (data: boolean) => void
}

export const rootColorVariants: ColorClass = {
  primary:
    'data-[state=checked]:bg-primary data-[state=checked]:border-primary border-gray hover:border-primary active:border-primary active:bg-primary',
  secondary:
    'data-[state=checked]:bg-secondary data-[state=checked]:border-secondary border-gray hover:border-secondary active:border-secondary active:bg-secondary',
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
    ref: Ref<HTMLButtonElement | null>,
  ) => {
    const checkboxRef = useRef<HTMLButtonElement>(null)

    useImperativeHandle(ref, () => checkboxRef.current)

    const colorClass = useMemo(() => {
      return rootColorVariants[color]
    }, [color])

    const disabledClass = useMemo(() => {
      return (
        disabled &&
        'data-[state=checked]:!bg-gray-400 data-[state=checked]:!border-gray !bg-gray-300 !border-gray'
      )
    }, [disabled])

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
          className,
          'flex h-4 w-4 items-center justify-center overflow-hidden rounded-sm border-2 text-gray-100 transition-all',
          colorClass,
          disabledClass,
        )}
        disabled={disabled}
        ref={checkboxRef}
        checked={value ?? checked}
        onCheckedChange={(ev) => handleCheck(ev)}
        {...rest}
      >
        {children}
      </RadixCheckbox.Root>
    )
  },
)

CheckboxRoot.displayName = 'Checkbox.Root'

export default CheckboxRoot
