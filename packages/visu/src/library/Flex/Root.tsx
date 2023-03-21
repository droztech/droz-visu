import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { HTMLAttributes, useMemo } from 'react'

export interface FlexRootProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
  center?: boolean
  direction?: 'col' | 'col-reverse' | 'row' | 'row-reverse'
  full?: boolean
  gap?: 'lg' | 'md' | 'sm'
  items?: 'baseline' | 'center' | 'end' | 'start' | 'stretch'
  justify?: 'around' | 'between' | 'center' | 'end' | 'evenly' | 'start'
  red?: boolean
  text?: 'center' | 'end' | 'justify' | 'left' | 'right' | 'start'
  wrap?: 'nowrap' | 'reverse' | 'wrap'
}

const FlexRoot = ({
  asChild,
  center,
  children,
  className,
  direction,
  full,
  gap = 'md',
  items,
  justify,
  red,
  text,
  wrap = 'wrap',
  ...rest
}: FlexRootProps) => {
  const RootComponent = asChild ? Slot : 'div'

  const centerClass = useMemo(() => {
    return center ? 'items-center justify-center' : ''
  }, [center])

  const directionClass = useMemo(() => {
    return direction
      ? clsx({
          'flex-col': direction === 'col',
          'flex-col-reverse': direction === 'col-reverse',
          'flex-row': direction === 'row',
          'flex-row-reverse': direction === 'row-reverse',
        })
      : ''
  }, [direction])

  const fullClass = useMemo(() => {
    return full ? 'w-full' : ''
  }, [full])

  const gapClass = useMemo(() => {
    return clsx({
      'gap-8': gap === 'lg',
      'gap-4': gap === 'md',
      'gap-2': gap === 'sm',
    })
  }, [gap])

  const itemsClass = useMemo(() => {
    return items
      ? clsx({
          'items-baseline': items === 'baseline',
          'items-center': items === 'center',
          'items-end': items === 'end',
          'items-start': items === 'start',
          'items-stretch': items === 'stretch',
        })
      : ''
  }, [items])

  const justifyClass = useMemo(() => {
    return justify
      ? clsx({
          'justify-around': justify === 'around',
          'justify-between': justify === 'between',
          'justify-center': justify === 'center',
          'justify-end': justify === 'end',
          'justify-evenly': justify === 'evenly',
          'justify-start': justify === 'start',
        })
      : ''
  }, [justify])

  const redClass = useMemo(() => {
    return red ? 'bg-[red]' : ''
  }, [red])

  const textClass = useMemo(() => {
    return text
      ? clsx({
          'text-center': text === 'center',
          'text-end': text === 'end',
          'text-justify': text === 'justify',
          'text-left': text === 'left',
          'text-right': text === 'right',
          'text-start': text === 'start',
        })
      : ''
  }, [text])

  const wrapClass = useMemo(() => {
    return clsx({
      'flex-nowrap': wrap === 'nowrap',
      'flex-wrap-reverse': wrap === 'reverse',
      'flex-wrap': wrap === 'wrap',
    })
  }, [wrap])

  return (
    <RootComponent
      className={clsx([
        className,
        'flex',
        centerClass,
        directionClass,
        fullClass,
        gapClass,
        itemsClass,
        justifyClass,
        redClass,
        textClass,
        wrapClass,
      ])}
      {...rest}
    >
      {children}
    </RootComponent>
  )
}

FlexRoot.displayName = 'Flex'

export default FlexRoot
