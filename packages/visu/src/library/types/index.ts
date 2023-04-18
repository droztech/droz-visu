export * from './Avatar'
export * from './Button'
export * from './Flex'

export type Size = keyof SizeClass

export type SizeClass = {
  lg: string
  md: string
  sm: string
}

export type Color = keyof ColorClass

export type ColorClass = {
  primary: string
  secondary: string
}
