import VisuTailwindcssPlugin from '@coaktion/visu/dist/theme-plugin'
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  plugins: [VisuTailwindcssPlugin],
} satisfies Config
