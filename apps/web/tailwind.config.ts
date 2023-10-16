import VisuTailwindcssPlugin from '@droz-js/visu/dist/theme-plugin'
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}', '../../node_modules/@droz-js/visu/dist/visu.es.js'],
  plugins: [VisuTailwindcssPlugin],
} satisfies Config
