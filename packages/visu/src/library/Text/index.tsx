import { CSS } from '@library'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps } from '@stitches/react'
import { HTMLAttributes } from 'react'

import * as Styles from './style'

// ========================= ROOT =========================

export interface TextProps
  extends VariantProps<typeof Styles.Root>,
    Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  asChild?: boolean
  color?: string
  css?: CSS
}

const Text = ({
  children,
  asChild,
  color,
  className,
  css,
  link,
  align,
  ellipsis,
  size,
  weight,
  underline,
  ...rest
}: TextProps): JSX.Element => {
  const Component = asChild ? Slot : 'span'

  return (
    <Component
      className={Styles.Root({
        className,
        css: {
          ...css,
          color,
        },
        link,
        align,
        ellipsis,
        size,
        weight,
        underline,
      })}
      {...rest}
    >
      {children}
    </Component>
  )
}

Text.displayName = 'Text'

// ========================= EXPORTS =========================

export default Text
