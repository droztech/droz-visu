export * from './Button'
export * from './Flex'
export * from './FloatCard'

export type Align = keyof AlignClass

export interface AlignClass {
  center: string
  left: string
  right: string
}

export type Color = keyof ColorClass

export interface ColorClass {
  primary: string
  secondary: string
}

export type ExtendedColor = keyof ExtendedColorClass

export interface ExtendedColorClass extends FullColorClass {
  current: string
  gray: string
  white: string
}

export type FullColor = keyof FullColorClass

export interface FullColorClass extends ColorClass {
  alert: string
  error: string
  success: string
}

export type FullSize = keyof FullSizeClass

export interface FullSizeClass extends SizeClass {
  '2xl': string
  '3xl': string
  xl: string
  xs: string
}

export type LargerSizes = keyof LargerSizesClass

export interface LargerSizesClass extends Omit<SizeClass, 'sm'> {}

export type Side = keyof SideClass

export interface SideClass {
  left: string
  right: string
}

export type Size = keyof SizeClass

export interface SizeClass {
  lg: string
  md: string
  sm: string
}

export type SmallerSizes = keyof SmallerSizesClass

export interface SmallerSizesClass extends Omit<SizeClass, 'lg'> {}

export type Status = keyof StatusClass

export interface StatusClass {
  error: string
  success: string
}

export type Weight = keyof WeightClass

export interface WeightClass {
  bold: string
  light: string
  normal: string
  semibold: string
}
