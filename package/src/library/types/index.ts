export * from './Button'
export * from './FloatCard'
export * from './Icon'
export * from './Toast'

export interface AlignClass {
  center: string
  left: string
  right: string
}

export interface ColorClass {
  primary: string
  secondary: string
}

export interface FullColorClass extends ColorClass {
  alert: string
  error: string
  success: string
}

export interface ExtendedColorClass extends FullColorClass {
  current: string
  gray: string
  white: string
}

export interface StatusClass {
  error: string
  success: string
}

export interface ExtendedStatusClass extends StatusClass {
  alert: string
}

export interface SizeClass {
  lg: string
  md: string
  sm: string
}

export interface FullSizeClass extends SizeClass {
  '2xl': string
  '3xl': string
  xl: string
  xs: string
}

export interface LargerSizesClass extends Omit<SizeClass, 'sm'> {}

export interface PositionClass {
  bottom: string
  left: string
  right: string
  top: string
}

export interface SideClass {
  left: string
  right: string
}

export interface SmallerSizesClass extends Omit<SizeClass, 'lg'> {}

export interface WeightClass {
  bold: string
  light: string
  normal: string
  semibold: string
}

export type Align = keyof AlignClass
export type Color = keyof ColorClass
export type ExtendedColor = keyof ExtendedColorClass
export type ExtendedStatus = keyof ExtendedStatusClass
export type FullColor = keyof FullColorClass
export type FullSize = keyof FullSizeClass
export type LargerSizes = keyof LargerSizesClass
export type Position = keyof PositionClass
export type Side = keyof SideClass
export type Size = keyof SizeClass
export type SmallerSizes = keyof SmallerSizesClass
export type Status = keyof StatusClass
export type Weight = keyof WeightClass
