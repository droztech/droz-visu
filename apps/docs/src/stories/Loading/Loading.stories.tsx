import { ComponentStory, Meta } from '@storybook/react'

import { Loading, LoadingProps } from '@coaktion/visu'

export default {
  title: 'Loading/Loading',
  component: Loading,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    size: {
      control: { type: 'inline-radio' },
      description: 'Define o tamanho do loading',
      options: ['md', 'lg'] as LoadingProps['size'][],
      table: {
        type: {
          summary: ['md', 'lg'].join('|'),
        },
        defaultValue: { summary: 'md' },
      },
      type: { name: 'string', required: false },
    },
    color: {
      control: { type: 'select' },
      description: 'Define a de cor do loading',
      options: [
        'alert',
        'current',
        'error',
        'gray',
        'primary',
        'secondary',
        'success',
        'white',
      ] as LoadingProps['color'][],
      table: {
        type: {
          summary: [
            'alert',
            'current',
            'error',
            'gray',
            'primary',
            'secondary',
            'success',
            'white',
          ].join('|'),
        },
      },
      type: { name: 'string', required: false },
    },
  },
  args: {
    children: '',
  },
} as Meta<LoadingProps>

export const Comum: ComponentStory<typeof Loading> = (args) => {
  return <Loading {...args}></Loading>
}
