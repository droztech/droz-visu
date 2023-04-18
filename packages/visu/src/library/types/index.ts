export * from './Button'
export * from './Flex'
export * from './FloatCard'

export type Color = keyof ColorClass

export interface ColorClass {
  primary: string
  secondary: string
}

export type ExtendedColor = keyof ExtendedColorClass

export interface ExtendedColorClass extends ColorClass {
  alert: string
  current: string
  error: string
  gray: string
  success: string
  white: string
}

export type LargerSizes = keyof LargerSizesClass

export interface LargerSizesClass extends Omit<SizeClass, 'sm'> {}

export type Size = keyof SizeClass

export interface SizeClass {
  lg: string
  md: string
  sm: string
}

export type Status = keyof StatusClass

export interface StatusClass {
  error: string
  success: string
}
