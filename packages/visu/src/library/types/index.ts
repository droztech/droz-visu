export * from './Button'
export * from './Flex'
export * from './FloatCard'

export type Color = keyof ColorClass

export type ColorClass = {
  primary: string
  secondary: string
}

export type Size = keyof SizeClass

export type SizeClass = {
  lg: string
  md: string
  sm: string
}

export type Status = keyof StatusClass

export type StatusClass = {
  error: string
  success: string
}
