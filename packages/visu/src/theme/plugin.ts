import { theme } from './config'
import plugin from 'tailwindcss/plugin'

const VisuTailwindcssPlugin = plugin(
  function ({ addVariant, matchVariant }) {
    addVariant('children', '& > *')
    matchVariant('has', (value) => {
      return `&:has(> ${value})`
    })
  },
  {
    theme,
  },
)

export default VisuTailwindcssPlugin
