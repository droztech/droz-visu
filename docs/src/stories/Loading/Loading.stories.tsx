import { Loading, LoadingProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<LoadingProps> = {
  title: 'Loading/Loading',
  component: Loading,
  argTypes: {
    color: {
      control: { type: 'select' },
      description: 'Define a de cor do componente.',
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
    size: {
      control: { type: 'inline-radio' },
      description: 'Define o tamanho do componente.',
      options: ['md', 'lg'] as LoadingProps['size'][],
      table: {
        type: {
          summary: ['md', 'lg'].join('|'),
        },
        defaultValue: { summary: 'md' },
      },
      type: { name: 'string', required: false },
    },
  },
  args: {
    color: 'current',
    size: 'md',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3107-18088&t=AdZjH6UtpERmhB5O-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type LoadingStory = StoryObj<LoadingProps>

export const Comum: LoadingStory = {
  render: (args) => {
    return <Loading {...args}></Loading>
  },
}
