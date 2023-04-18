import { Slot } from '@radix-ui/react-slot'
import {
  FlexDirection,
  FlexDirectionClass,
  FlexItems,
  FlexItemsClass,
  FlexJustify,
  FlexJustifyClass,
  FlexText,
  FlexTextClass,
  FlexWrap,
  FlexWrapClass,
  Size,
  SizeClass,
} from '@types'
import { clsx } from 'clsx'
import { FC, HTMLAttributes, useMemo } from 'react'

export interface FlexRootProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
  center?: boolean
  direction?: FlexDirection
  full?: boolean
  gap?: Size
  items?: FlexItems
  justify?: FlexJustify
  red?: boolean
  text?: FlexText
  wrap?: FlexWrap
}

const directionClassVariants: FlexDirectionClass = {
  col: 'flex-col',
  'col-reverse': 'flex-col-reverse',
  row: 'flex-row',
  'row-reverse': 'flex-row-reverse',
}

const gapClassVariants: SizeClass = {
  lg: 'gap-8',
  md: 'gap-4',
  sm: 'gap-2',
}

const itemsClassVariants: FlexItemsClass = {
  baseline: 'items-baseline',
  center: 'items-center',
  end: 'items-end',
  start: 'items-start',
  stretch: 'items-stretch',
}

const justifyClassVariants: FlexJustifyClass = {
  around: 'justify-around',
  between: 'justify-between',
  center: 'justify-center',
  end: 'justify-end',
  evenly: 'justify-evenly',
  start: 'justify-start',
}

const textClassVariants: FlexTextClass = {
  center: 'text-center',
  end: 'text-end',
  justify: 'text-justify',
  left: 'text-left',
  right: 'text-right',
  start: 'text-start',
}

const wrapClassVariants: FlexWrapClass = {
  nowrap: 'flex-nowrap',
  reverse: 'flex-wrap-reverse',
  wrap: 'flex-wrap',
}

const FlexRoot: FC<FlexRootProps> = ({
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
}) => {
  const RootComponent = asChild ? Slot : 'div'

  const centerClass = useMemo<string>(() => {
    return center ? 'items-center justify-center' : ''
  }, [center])

  const directionClass = useMemo<string>(() => {
    return direction ? directionClassVariants[direction] : ''
  }, [direction])

  const fullClass = useMemo<string>(() => {
    return full ? 'w-full' : ''
  }, [full])

  const gapClass = useMemo<string>(() => {
    return gapClassVariants[gap]
  }, [gap])

  const itemsClass = useMemo<string>(() => {
    return items ? itemsClassVariants[items] : ''
  }, [items])

  const justifyClass = useMemo<string>(() => {
    return justify ? justifyClassVariants[justify] : ''
  }, [justify])

  const redClass = useMemo<string>(() => {
    return red ? 'bg-[red]' : ''
  }, [red])

  const textClass = useMemo<string>(() => {
    return text ? textClassVariants[text] : ''
  }, [text])

  const wrapClass = useMemo<string>(() => {
    return wrapClassVariants[wrap]
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
