import { Popover, PopoverProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<PopoverProps> = {
  title: 'Popover/Popover',
  component: Popover,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    icon: {
      control: 'none',
      description: 'Ícone do popover',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      type: { name: 'other', required: true, value: 'React.ReactNode' },
    },
    align: {
      control: 'none',
      description: 'Alinhamento do conteúdo do popover.',
      options: ['center', 'start', 'end'],
      table: {
        type: { summary: ['center', 'start', 'end'].join('|') },
        defaultValue: { summary: 'center' },
      },
      type: {
        name: 'enum',
        required: false,
        value: ['center', 'start', 'end'],
      },
    },

    side: {
      control: 'none',
      description: 'Posição do conteúdo em relação ao popover.',
      options: ['top', 'right', 'bottom', 'left'],
      table: {
        type: { summary: ['top', 'right', 'bottom', 'left'].join('|') },
        defaultValue: { summary: 'bottom' },
      },
      type: {
        name: 'enum',
        required: false,
        value: ['top', 'right', 'bottom', 'left'],
      },
    },
  },
  args: {
    icon: true,
    align: false,
    side: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: '',
      allowFullscreen: true,
    },
  },
} as Meta<PopoverProps>

export default meta
type PopoverStory = StoryObj<PopoverProps>

export const Comum: PopoverStory = {
  render: (args) => {
    return <Popover {...args}></Popover>
  },
}
