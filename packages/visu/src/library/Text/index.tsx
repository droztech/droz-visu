import { Slot } from '@radix-ui/react-slot'
import {
  Align,
  AlignClass,
  FullColor,
  FullColorClass,
  FullSize,
  FullSizeClass,
  Weight,
  WeightClass,
} from '@types'
import { clsx } from 'clsx'
import { FC, HTMLAttributes, useMemo } from 'react'

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  align?: Align
  asChild?: boolean
  color?: FullColor
  ellipsis?: boolean
  inline?: boolean
  link?: FullColor
  size?: FullSize
  underline?: boolean
  weight?: Weight
}

const alignClassVariants: AlignClass = {
  center: 'text-center',
  left: 'text-left',
  right: 'text-right',
}

const colorClassVariants: FullColorClass = {
  alert: 'text-alert',
  error: 'text-error',
  primary: 'text-primary',
  secondary: 'text-secondary',
  success: 'text-success',
}

const linkClassVariants: FullColorClass = {
  alert: 'hover:text-alert-500 active:text-alert-600',
  error: 'hover:text-error-500 active:text-error-600',
  primary: 'hover:text-primary-500 active:text-primary-600',
  secondary: 'hover:text-secondary-500 active:text-secondary-600',
  success: 'hover:text-success-500 active:text-success-600',
}

const sizeClassVariants: FullSizeClass = {
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  lg: 'text-lg',
  md: 'text-md',
  sm: 'text-sm',
  xl: 'text-xl',
  xs: 'text-xs',
}

const weightClassVariants: WeightClass = {
  bold: 'font-bold',
  normal: 'font-normal',
  light: 'font-light',
  semibold: 'font-semibold',
}

const Text: FC<TextProps> = ({
  align,
  asChild,
  children,
  className,
  color,
  ellipsis,
  inline,
  link,
  size,
  underline,
  weight,
  ...rest
}) => {
  const Component = asChild ? Slot : 'span'

  const alignClass = useMemo<string>(() => {
    return align ? alignClassVariants[align] : ''
  }, [align])

  const colorClass = useMemo<string>(() => {
    return color ? colorClassVariants[color] : ''
  }, [color])

  const linkClass = useMemo<string>(() => {
    return link
      ? ['cursor-pointer rounded-lg', linkClassVariants[link]].join(' ')
      : ''
  }, [link])

  const ellipsisClass = useMemo<string>(() => {
    return ellipsis
      ? 'text-ellipsis overflow-hidden whitespace-nowrap max-w-full'
      : ''
  }, [ellipsis])

  const inlineClass = useMemo<string>(() => {
    return inline ? 'inline-flex gap-px flex-wrap items-center' : ''
  }, [inline])

  const sizeClass = useMemo<string>(() => {
    return size ? sizeClassVariants[size] : ''
  }, [size])

  const underlineClass = useMemo<string>(() => {
    return underline ? 'underline underline-offset-2' : ''
  }, [underline])

  const weightClass = useMemo<string>(() => {
    return weight ? weightClassVariants[weight] : ''
  }, [weight])

  return (
    <Component
      className={clsx([
        className,
        'text-inherit-size',
        'transition-all',
        'children:text-inherit-size',
        'children:inline',
        '[&_svg]:align-middle',
        alignClass,
        colorClass,
        ellipsisClass,
        inlineClass,
        linkClass,
        sizeClass,
        underlineClass,
        weightClass,
      ])}
      {...rest}
    >
      {children}
    </Component>
  )
}

Text.displayName = 'Text'

export default Text
