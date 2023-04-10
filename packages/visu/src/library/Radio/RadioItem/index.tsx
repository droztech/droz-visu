import * as RadixRadio from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'
import { FC, useMemo } from 'react'

import { rootCheckedVariants, rootDisabledVariants } from './style'

export interface RadioItemProps extends RadixRadio.RadioGroupItemProps {
  color?: 'primary' | 'secondary'
  value: string
  currentValue: string
}

const RadioItem: FC<RadioItemProps> = ({
  color = 'primary',
  value,
  currentValue,
  children,
  className,
  disabled,
  ...rest
}) => {
  const radioClass = useMemo(() => {
    if (disabled) {
      return value === currentValue
        ? rootDisabledVariants['disabledChecked']
        : rootDisabledVariants['disabledUnchecked']
    }

    return value === currentValue
      ? rootCheckedVariants[color].checked
      : rootCheckedVariants[color].unchecked
  }, [disabled, value, currentValue, color])

  return (
    <label className="flex items-center gap-2">
      <RadixRadio.Item
        className={clsx(
          'border-2 transition-all w-4 h-4 rounded-full flex items-center justify-center',
          radioClass
        )}
        value={value}
        disabled={disabled}
        {...rest}
      >
        <RadixRadio.Indicator className="w-2 h-2 rounded-full" />
      </RadixRadio.Item>
      {children}
    </label>
  )
}

export default RadioItem
