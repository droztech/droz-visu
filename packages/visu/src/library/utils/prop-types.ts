export const objectValues = <T extends { [key: string]: string }>(args: T) =>
  args

export const normalColors = objectValues({
  primary: '$primary400',
  secondary: '$secondary400',
  success: '$success400',
  error: '$error400',
  alert: '$alert400',
})

export type NormalColors = keyof typeof normalColors
