import * as RadixSwitch from '@radix-ui/react-switch'
import { clsx } from 'clsx'
import { FC, useMemo } from 'react'

export interface SwitchProps
  extends Omit<RadixSwitch.SwitchProps, 'value' | 'onChange'> {
  label?: boolean
  value?: boolean
  onChange?: (ev: boolean) => void
  /**
   * @deprecated Use `value` instead
   */
  checked?: boolean
  /**
   * @deprecated Use `onChange` instead
   */
  onCheckedChange?: (checked: boolean) => void
}

const Switch: FC<SwitchProps> = ({
  label,
  className,
  disabled,
  value,
  checked,
  onChange,
  onCheckedChange,
  ...rest
}) => {
  const colorClass = useMemo<string>(() => {
    if (disabled) return 'bg-gray-300 pointer-events-none'
    return 'data-[state=unchecked]:bg-gray-400 hover:data-[state=unchecked]:bg-gray-500 active:data-[state=unchecked]:bg-gray-600 data-[state=checked]:bg-primary-400 hover:data-[state=checked]:bg-primary-500 active:data-[state=checked]:bg-primary-600'
  }, [disabled])

  const sizeClass = useMemo<string>(() => {
    if (label) return 'w-12'
    return 'w-10'
  }, [label])

  const translateClass = useMemo<string>(() => {
    if (label) return 'data-[state=checked]:translate-x-6'
    return 'data-[state=checked]:translate-x-4'
  }, [label])

  const parsedValue = useMemo(() => {
    return value ?? checked
  }, [checked, value])

  return (
    <RadixSwitch.Root
      className={clsx([
        'relative flex h-6 items-center rounded-3xl p-0.5 transition-all',
        colorClass,
        sizeClass,
        className,
      ])}
      disabled={disabled}
      checked={parsedValue}
      onCheckedChange={onChange ?? onCheckedChange}
      {...rest}
    >
      {label && parsedValue && (
        <span className="absolute left-0 px-1.5 text-xs font-semibold text-gray-100">
          On
        </span>
      )}
      <RadixSwitch.Thumb
        className={clsx(
          'block h-5 w-5 rounded-full bg-gray-100 transition-all data-[state=unchecked]:translate-x-0',
          translateClass,
        )}
      />
      {label && !parsedValue && (
        <span className="absolute right-0 px-1.5 text-xs font-semibold text-gray-100">
          Off
        </span>
      )}
    </RadixSwitch.Root>
  )
}

Switch.displayName = 'Switch'

export default Switch
