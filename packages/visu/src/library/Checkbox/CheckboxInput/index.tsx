import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'
import { Check } from 'phosphor-react'
import { FC, useMemo } from 'react'

import { rootCheckedVariants, rootDisabledVariants } from './style'

export interface CheckboxInputProps extends RadixCheckbox.CheckboxProps {
  color?: 'primary' | 'secondary'
}

const CheckboxInput: FC<CheckboxInputProps> = ({
  color = 'primary',
  disabled,
  checked,
  children,
  className,
  ...rest
}) => {
  const rootClass = useMemo(() => {
    if (disabled) {
      return checked
        ? rootDisabledVariants['disabledChecked']
        : rootDisabledVariants['disabledUnchecked']
    }

    return checked
      ? rootCheckedVariants[color].checked
      : rootCheckedVariants[color].unchecked

    // return rootCheckedVariants[color][checked ? 'checked' : 'unchecked']
  }, [disabled, checked, color])

  return (
    <RadixCheckbox.Root
      className={clsx(
        'border-2 text-gray-100 w-4 h-4 transition-all flex items-center justify-center rounded-sm overflow-hidden',
        rootClass
      )}
      disabled={disabled}
      {...rest}
    >
      <RadixCheckbox.Indicator>
        <Check />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  )
}

export default CheckboxInput
