import { componentsStyle } from './stitches.config'
import './styles/index.css'

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

// ================ V2 ========================

export { default as Textv2 } from './TextV2'
export type { TextProps as TextV2Props } from './TextV2'

export { default as InputV2 } from './InputV2'
export type {
  InputIconV2Props,
  InputInputV2Props,
  InputRootV2Props,
} from './InputV2'

export { default as ButtonV2 } from './ButtonV2'
export type { ButtonIconV2Props, ButtonRootV2Props } from './ButtonV2'
