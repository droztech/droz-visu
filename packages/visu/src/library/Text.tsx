import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { HTMLAttributes, useMemo } from 'react'

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  align?: 'left' | 'center' | 'right'
  asChild?: boolean
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'alert'
  ellipsis?: boolean
  inline?: boolean
  link?: 'primary' | 'secondary' | 'success' | 'error' | 'alert'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  underline?: boolean
  weight?: 'light' | 'normal' | 'semibold' | 'bold'
}

const Text = ({
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
}: TextProps) => {
  const Component = asChild ? Slot : 'span'

  const alignClass = useMemo(() => {
    return align
      ? clsx({
          'text-left': align === 'left',
          'text-center': align === 'center',
          'text-right': align === 'right',
        })
      : ''
  }, [align])

  const colorClass = useMemo(() => {
    return color
      ? clsx({
          'text-primary': color === 'primary',
          'text-secondary': color === 'secondary',
          'text-success': color === 'success',
          'text-error': color === 'error',
          'text-alert': color === 'alert',
        })
      : ''
  }, [color])

  const linkClass = useMemo(() => {
    return link
      ? clsx('cursor-pointer rounded-lg', {
          'hover:text-primary-500 active:text-primary-600': link === 'primary',
          'hover:text-secondary-500 active:text-secondary-600':
            link === 'secondary',
          'hover:text-success-500 active:text-success-600': link === 'success',
          'hover:text-error-500 active:text-error-600': link === 'error',
          'hover:text-alert-500 active:text-alert-600': link === 'alert',
        })
      : ''
  }, [link])

  const ellipsisClass = useMemo(() => {
    return ellipsis
      ? 'text-ellipsis overflow-hidden whitespace-nowrap max-w-full'
      : ''
  }, [ellipsis])

  const inlineClass = useMemo(() => {
    return inline ? 'inline-flex gap-px flex-wrap items-center' : ''
  }, [inline])

  const sizeClass = useMemo(() => {
    return size
      ? clsx({
          'text-xs': size === 'xs',
          'text-sm': size === 'sm',
          'text-md': size === 'md',
          'text-lg': size === 'lg',
          'text-xl': size === 'xl',
          'text-2xl': size === '2xl',
          'text-3xl': size === '3xl',
        })
      : ''
  }, [size])

  const underlineClass = useMemo(() => {
    return underline ? 'underline underline-offset-2' : ''
  }, [underline])

  const weightClass = useMemo(() => {
    return weight
      ? clsx({
          'font-light': weight === 'light',
          'font-normal': weight === 'normal',
          'font-semibold': weight === 'semibold',
          'font-bold': weight === 'bold',
        })
      : ''
  }, [weight])

  return (
    <Component
      className={clsx([
        className,
        alignClass,
        colorClass,
        ellipsisClass,
        inlineClass,
        linkClass,
        sizeClass,
        underlineClass,
        weightClass,
        'text-inherit-size',
        'transition-all',
        'children:text-inherit-size',
        'children:align-middle',
      ])}
      {...rest}
    >
      {children}
    </Component>
  )
}

Text.displayName = 'Text'

export default Text
