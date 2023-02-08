import { ComponentProps, HTMLAttributes, useMemo } from 'react'

import { resolveColor } from '../utils/color'
import { NormalColors } from '../utils/prop-types'
import * as Component from './style'

// ========================= ROOT =========================

export interface TextProps
  extends ComponentProps<typeof Component.Root>,
    Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<unknown>
  color?: NormalColors | string
}

const Text = ({
  children,
  color = '$gray900',
  css,
  ...rest
}: TextProps): JSX.Element => {
  const resolvedColor = useMemo(() => {
    return resolveColor({ color: color })
  }, [color])

  return (
    <Component.Root
      {...rest}
      css={{
        ...css,
        color: resolvedColor,
      }}
    >
      {children}
    </Component.Root>
  )
}

// ========================= EXPORTS =========================

export default Text
