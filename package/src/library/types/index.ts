export type VariantClass<T extends string> = {
  [key in T]: any
}

export interface ColorClass {
  primary: any
  secondary: any
}

export interface AlignClass {
  center: any
  left: any
  right: any
}

export interface SizeClass {
  sm: any
  md: any
  lg: any
}

export interface StatusClass {
  alert: any
  error: any
  success: any
}

export interface PositionClass {
  bottom: any
  left: any
  right: any
  top: any
}

export interface PosXClass {
  left: any
  right: any
}

export interface PosYClass {
  bottom: any
  top: any
}

export interface OrientationClass {
  horizontal: any
  vertical: any
}

export interface SideClass {
  left: any
  right: any
}

export type Align = keyof AlignClass
export type Color = keyof ColorClass
export type Size = keyof SizeClass
export type Position = keyof PositionClass
export type Status = keyof StatusClass
export type PosX = keyof PosXClass
export type PosY = keyof PosYClass
export type Orientation = keyof OrientationClass
export type Side = keyof SideClass
