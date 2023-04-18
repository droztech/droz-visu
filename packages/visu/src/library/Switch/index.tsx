import * as RadixSwitch from '@radix-ui/react-switch'
import { clsx } from 'clsx'
import { FC, useMemo } from 'react'

export interface SwitchProps extends RadixSwitch.SwitchProps {}

const Switch: FC<SwitchProps> = ({ className, disabled, ...rest }) => {
  const rootColorClass = useMemo<string>(() => {
    if (disabled) return 'bg-gray-300 pointer-events-none'

    return 'data-[state=unchecked]:bg-error-400 data-[state=checked]:bg-success-400 hover:p-1 [&:hover>*]:h-4 [&:hover>*]:w-4'
  }, [disabled])

  return (
    <RadixSwitch.Root
      className={clsx([
        className,
        'w-12',
        'h-6',
        'rounded-3xl',
        'transition-all',
        'p-0.5',
        rootColorClass,
      ])}
      disabled={disabled}
      {...rest}
    >
      <RadixSwitch.Thumb className="w-5 h-5 rounded-full bg-gray-100 block data-[state=unchecked]:translate-x-0 data-[state=checked]:translate-x-6 transition-all" />
    </RadixSwitch.Root>
  )
}

export default Switch
