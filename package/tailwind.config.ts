import VisuTailwindcssPlugin from './src/theme/theme-plugin'
import type { Config } from 'tailwindcss'

export default {
  content: ['./src/library/**/*.{ts,tsx}', './src/App.tsx', './src/main.tsx', './src/layout/**/*.tsx'],
  plugins: [VisuTailwindcssPlugin],
} satisfies Config
