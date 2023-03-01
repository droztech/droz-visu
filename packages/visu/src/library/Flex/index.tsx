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
  gap: string
  flex: number
}

const Flex = ({
  children,
  asChild = false,
  css,
  gap = '$2',
  center,
  items,
  justify,
  align,
  emphasis,
  flow,
  ...rest
}: FlexProps): JSX.Element => {
  const ComponentRoot = asChild ? Slot : 'div'

  return (
    <ComponentRoot
      className={Component.Flex({
        css: {
          ...css,
          gap,
          center,
          items,
          justify,
          align,
          emphasis,
          flow,
        },
      })}
      {...rest}
    >
      {children}
    </ComponentRoot>
  )
}

Flex.displayName = 'Flex'

// ========================= EXPORTS =========================

export default Flex
