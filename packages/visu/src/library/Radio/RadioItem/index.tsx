import * as RadixRadio from '@radix-ui/react-radio-group'
import { clsx } from 'clsx'
import { FC, useMemo } from 'react'

import { dotColorVariants, rootColorVariants } from './style'

export interface RadioItemProps extends RadixRadio.RadioGroupItemProps {
  color?: 'primary' | 'secondary'
}

const RadioItem: FC<RadioItemProps> = ({
  color = 'primary',
  children,
  className,
  disabled,
  ...rest
}) => {
  const rootColorClass = useMemo(() => {
    if (disabled) return 'border-gray'

    return rootColorVariants[color]
  }, [disabled, color])

  const dotColorClass = useMemo(() => {
    if (disabled) return 'bg-gray'

    return dotColorVariants[color]
  }, [disabled, color])

  return (
    <RadixRadio.Item
      className={clsx(
        'border-2 transition-all w-4 h-4 rounded-full flex items-center justify-center',
        rootColorClass
      )}
      disabled={disabled}
      {...rest}
    >
      <RadixRadio.Indicator
        className={clsx('w-2 h-2 rounded-full', dotColorClass)}
      />
    </RadixRadio.Item>
  )
}

export default RadioItem
