import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'
import { Check } from 'phosphor-react'
import { FC, useMemo } from 'react'

import { rootColorVariants } from './style'

export interface CheckboxProps extends RadixCheckbox.CheckboxProps {
  color?: 'primary' | 'secondary'
}

const Checkbox: FC<CheckboxProps> = ({
  color = 'primary',
  disabled,
  children,
  className,
  ...rest
}) => {
  const rootColorClass = useMemo(() => {
    if (disabled)
      return 'data-[state=checked]:bg-gray-400 data-[state=checked]:border-gray bg-gray-300 border-gray'

    return rootColorVariants[color]
  }, [disabled, color])

  return (
    <RadixCheckbox.Root
      className={clsx(
        'border-2 text-gray-100 w-4 h-4 transition-all flex items-center justify-center rounded-sm overflow-hidden',
        rootColorClass
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

export default Checkbox
