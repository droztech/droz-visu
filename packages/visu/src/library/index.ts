import { componentsStyle } from './stitches.config'

export * from './stitches.config'

componentsStyle()

export { default as Button } from './Button'
export type { ButtonIconProps, ButtonRootProps } from './Button'

export { default as Text } from './Text'
export type { TextProps } from './Text'

export { default as Input } from './Input'
export type { InputRootProps, InputIconProps, InputInputProps } from './Input'

export { default as Flex } from './Flex'
export type { FlexProps } from './Flex'
