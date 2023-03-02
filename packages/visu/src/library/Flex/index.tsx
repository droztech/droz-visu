import { CSS } from '@library'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps } from '@stitches/react'
import { HtmlHTMLAttributes } from 'react'

import * as Component from './style'

// ========================= ROOT =========================

export interface FlexProps
  extends HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof Component.Flex> {
  asChild?: boolean
  children: React.ReactNode
  css?: CSS
  className?: string
  gap?: string
  flex?: number
}

const Flex = ({
  children,
  asChild = false,
  css,
  className,
  gap = '$2',
  flex,
  center,
  items,
  justify,
  text,
  red,
  direction,
  full,
  ...rest
}: FlexProps): JSX.Element => {
  const ComponentRoot = asChild ? Slot : 'div'

  return (
    <ComponentRoot
      className={Component.Flex({
        css: {
          gap,
          flex,
          ...css,
        },
        className,
        center,
        items,
        justify,
        text,
        red,
        direction,
        full,
      })}
      {...rest}
    >
      {children}
    </ComponentRoot>
  )
}

Flex.displayName = 'Flex'

// ========================= EXPORTS =========================

const FlexContainer = {
  Row: ({ children, ...rest }: Omit<FlexProps, 'direction'>) => (
    <Flex direction="row" {...rest}>
      {children}
    </Flex>
  ),
  Col: ({ children, ...rest }: Omit<FlexProps, 'direction'>) => (
    <Flex direction="col" {...rest}>
      {children}
    </Flex>
  ),
}

export default FlexContainer
