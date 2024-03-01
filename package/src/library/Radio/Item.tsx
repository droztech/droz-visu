import { cn } from '@/src/utils/class-merge.helper'

import * as RadixRadio from '@radix-ui/react-radio-group'
import { FC, useMemo } from 'react'

const disabledVariants = {
  root: 'border-gray',
  dot: 'bg-gray',
}

const colorVariants = {
  primary: {
    root: 'data-[state=checked]:border-primary border-gray hover:border-primary [&:active>*]:bg-primary',
    dot: 'data-[state=checked]:bg-primary',
  },
  secondary: {
    root: 'data-[state=checked]:border-secondary border-gray hover:border-secondary [&:active>*]:bg-secondary',
    dot: 'data-[state=checked]:bg-primary',
  },
}

export interface RadioItemProps extends RadixRadio.RadioGroupItemProps {
  color?: keyof typeof colorVariants
}

const RadioItem: FC<RadioItemProps> = ({
  className,
  color = 'primary',
  disabled,
  ...rest
}) => {
  const colorClass = useMemo(() => {
    if (disabled) return disabledVariants.root
    return colorVariants[color].root
  }, [disabled, color])

  const dotColorClass = useMemo(() => {
    if (disabled) return disabledVariants.dot
    return colorVariants[color].dot
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
