import { cn } from '@/src/utils/class-merge.helper'

import * as RadixRadio from '@radix-ui/react-radio-group'
import { FC, useMemo } from 'react'

export const colorClassVariants = {
  primary:
    'data-[state=checked]:border-primary border-gray hover:border-primary [&:active>*]:bg-primary',
  secondary:
    'data-[state=checked]:border-secondary border-gray hover:border-secondary [&:active>*]:bg-secondary',
}

export const dotColorClassVariants = {
  primary: 'data-[state=checked]:bg-primary',
  secondary: 'data-[state=checked]:bg-secondary',
}

export interface RadioItemProps extends RadixRadio.RadioGroupItemProps {
  color?: keyof typeof colorClassVariants
}

const RadioItem: FC<RadioItemProps> = ({
  className,
  color = 'primary',
  disabled,
  ...rest
}) => {
  const colorClass = useMemo(() => {
    if (disabled) return 'border-gray'

    return colorClassVariants[color]
  }, [disabled, color])

  const dotColorClass = useMemo(() => {
    if (disabled) return 'bg-gray'

    return dotColorClassVariants[color]
  }, [disabled, color])

  return (
    <RadixRadio.Item
      className={cn(
        'flex h-4 w-4 items-center justify-center rounded-full border-2 transition-all',
        colorClass,
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      <RadixRadio.Indicator
        className={cn('h-2 w-2 rounded-full', dotColorClass)}
      />
    </RadixRadio.Item>
  )
}

RadioItem.displayName = 'Radio.Item'

export default RadioItem
