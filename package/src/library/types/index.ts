export interface VariantClass {
  [key: string]: any
}

export interface AlignClass {
  center: any
  left: any
  right: any
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

export interface SideClass {
  left: any
  right: any
}

export type Variant = keyof VariantClass
export type Align = keyof AlignClass
export type Position = keyof PositionClass
export type Side = keyof SideClass
export type Status = keyof StatusClass
export type PosX = keyof PosXClass
export type PosY = keyof PosYClass
