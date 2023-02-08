import { NormalColors, normalColors } from './prop-types'

export const resolveColor = ({ color }: { color: string }): string => {
  if (!color) return ''
  if (Object.keys(normalColors).includes(color))
    return normalColors[color as NormalColors]
  return color
}
