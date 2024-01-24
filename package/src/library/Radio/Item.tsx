import * as RadixRadio from '@radix-ui/react-radio-group'
import { Color, ColorClass } from '@types'
import { clsx } from 'clsx'
import { FC, useMemo } from 'react'

export interface RadioItemProps extends RadixRadio.RadioGroupItemProps {
  color?: Color
}

export const colorClassVariants: ColorClass = {
  primary: 'data-[state=checked]:border-primary border-gray hover:border-primary [&:active>*]:bg-primary',
  secondary: 'data-[state=checked]:border-secondary border-gray hover:border-secondary [&:active>*]:bg-secondary',
}

export const dotColorClassVariants: ColorClass = {
  primary: 'data-[state=checked]:bg-primary',
  secondary: 'data-[state=checked]:bg-secondary',
}

const RadioItem: FC<RadioItemProps> = ({ className, color = 'primary', disabled, ...rest }) => {
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
      className={clsx([
        className,
        'border-2',
        'transition-all',
        'w-4',
        'h-4',
        'rounded-full',
        'flex',
        'items-center',
        'justify-center',
        colorClass,
      ])}
      disabled={disabled}
      {...rest}
    >
      <RadixRadio.Indicator className={clsx(['w-2', 'h-2', 'rounded-full', dotColorClass])} />
    </RadixRadio.Item>
  )
}

RadioItem.displayName = 'Radio.Item'

export default RadioItem
