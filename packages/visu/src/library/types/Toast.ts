export interface PosXClass {
  left: string
  right: string
}

export interface PosYClass {
  bottom: string
  top: string
}

export type PosX = keyof PosXClass
export type PosY = keyof PosYClass
