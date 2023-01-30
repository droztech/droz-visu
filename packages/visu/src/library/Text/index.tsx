import { ComponentProps, HTMLAttributes } from 'react'

import * as Component from './style'

// ========================= ROOT =========================

export interface TextRootProps
  extends ComponentProps<typeof Component.Root>,
    Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  as?: keyof JSX.IntrinsicElements
}

const Text = ({ children, ...rest }: TextRootProps): JSX.Element => {
  return <Component.Root {...rest}>{children}</Component.Root>
}

// ========================= EXPORTS =========================

export default Text
