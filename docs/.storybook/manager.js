import { addons } from '@storybook/addons'
import theme from './theme.js'

addons.setConfig({
  theme,

  sidebar: {
    showRoots: false,
  }
})
