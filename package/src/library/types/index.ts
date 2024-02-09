export interface AlignClass {
  center: string
  left: string
  right: string
}

export interface StatusClass {
  alert: string
  error: string
  success: string
}

export interface PositionClass {
  bottom: string
  left: string
  right: string
  top: string
}

export interface PosXClass {
  left: string
  right: string
}

export interface PosYClass {
  bottom: string
  top: string
}

export interface SideClass {
  left: string
  right: string
}

export type Align = keyof AlignClass
export type Position = keyof PositionClass
export type Side = keyof SideClass
export type Status = keyof StatusClass
export type PosX = keyof PosXClass
export type PosY = keyof PosYClass
