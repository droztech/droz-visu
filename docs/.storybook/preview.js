import { themes } from '@storybook/theming';

import '@droz-js/visu/styles'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
  backgrounds: {
    default: 'Light',
    values: [
      {
        name: 'Light',
        value: '#f2f2f2',
      },
      {
        name: 'Dark',
        value: '#111827',
      },
    ],
  },
}
