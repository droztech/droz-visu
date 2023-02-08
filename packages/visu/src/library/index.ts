import { componentsStyle } from '@styles/global'

componentsStyle()

export type { NormalColors } from './utils/prop-types'
export { normalColors } from './utils/prop-types'

export { default as Button } from './Button'
export type { ButtonIconProps, ButtonRootProps } from './Button'

export { default as Text } from './Text'
export type { TextProps } from './Text'

export { default as Input } from './Input'
export type { InputRootProps, InputIconProps, InputInputProps } from './Input'
