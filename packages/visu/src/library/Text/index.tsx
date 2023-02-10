import { CSS } from '@/stitches.config'
import { Slot } from '@radix-ui/react-slot'
import { VariantProps } from '@stitches/react'
import { HTMLAttributes, useMemo } from 'react'

import { resolveColor } from '../utils/color'
import { NormalColors } from '../utils/prop-types'
import * as Styles from './style'

// ========================= ROOT =========================

export interface TextProps
  extends VariantProps<typeof Styles.Root>,
    Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  asChild?: boolean
  color?: NormalColors | string
  css?: CSS
}

const Text = ({
  children,
  asChild = false,
  color = '$gray900',
  css,
  link,
  size = 'md',
  underline = false,
  ...rest
}: TextProps): JSX.Element => {
  const Component = asChild ? Slot : 'span'

  const resolvedColor = useMemo(() => {
    return resolveColor({ color: color })
  }, [color])

  return (
    <Component
      {...rest}
      className={Styles.Root({
        css: {
          ...css,
          color: resolvedColor,
        },
        link,
        size,
        underline,
      })}
    >
      {children}
    </Component>
  )
}

Text.displayName = 'Text'

// ========================= EXPORTS =========================

export default Text
