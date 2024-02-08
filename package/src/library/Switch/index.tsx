import { cn } from '@/src/utils/class-merge.helper'

import * as RadixSwitch from '@radix-ui/react-switch'
import { FC, useMemo } from 'react'

export interface SwitchProps
  extends Omit<RadixSwitch.SwitchProps, 'value' | 'onChange'> {
  label?: boolean
  value?: boolean
  onChange?: (ev: boolean) => void
}

const Switch: FC<SwitchProps> = ({
  label,
  className,
  disabled,
  value,
  onChange,
  ...rest
}) => {
  const colorClass = useMemo<string>(() => {
    if (disabled) return 'bg-gray-400 pointer-events-none'
    return 'data-[state=unchecked]:bg-gray-400 hover:data-[state=unchecked]:bg-gray-500 active:data-[state=unchecked]:bg-gray-700 data-[state=checked]:bg-primary-400 hover:data-[state=checked]:bg-primary-500 active:data-[state=checked]:bg-primary-600'
  }, [disabled])

  return (
    <RadixSwitch.Root
      className={cn(
        'group/switch relative flex h-6 w-12 items-center rounded-3xl px-0.5 transition-all hover:px-1 active:px-1',
        colorClass,
        className,
      )}
      disabled={disabled}
      checked={value}
      onCheckedChange={onChange}
      {...rest}
    >
      {label && value && (
        <span className="absolute left-0 px-1.5 text-xs font-semibold text-gray-100 group-disabled/switch:text-gray-300">
          On
        </span>
      )}
      <RadixSwitch.Thumb className="block h-5 w-5 rounded-full bg-gray-100 transition-all group-hover/switch:h-4 group-hover/switch:w-4 group-active/switch:h-4 group-active/switch:w-4 group-disabled/switch:bg-gray-300 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0" />
      {label && !value && (
        <span className="absolute right-0 px-1.5 text-xs font-semibold text-gray-100 group-disabled/switch:text-gray-300">
          Off
        </span>
      )}
    </RadixSwitch.Root>
  )
}

Switch.displayName = 'Switch'

export default Switch
