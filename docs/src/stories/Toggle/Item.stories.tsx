import { Toggle, ToggleItemProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'
import { Alien } from 'phosphor-react'

const meta: Meta<ToggleItemProps> = {
  title: 'Toggle/Item',
  component: Toggle.Item,
  argTypes: {
    children: {
      control: 'none',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      type: { name: 'other', required: false, value: 'React.ReactNode' },
    },
    text: {
      control: 'text',
      description: 'Aplica o text em ToggleItem',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: false },
    },
    value: {
      control: 'text',
      description: 'Aplica o value em ToggleItem',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: true },
    },
    icon: {
      control: 'text',
      description: 'Aplica o icon em ToggleItem',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: false },
    },
    notification: {
      control: 'boolean',
      description: 'Aplica o notification em ToggleItem',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    children: '',
    text: 'Alien',
    icon: <Alien />,
    value: 'alien',
  },
} as Meta<ToggleItemProps>

export default meta
type ToggleItemStory = StoryObj<ToggleItemProps>

export const Comum: ToggleItemStory = {
  render: (args: ToggleItemProps) => {
    return (
      <Toggle.Root type="single" expanded>
        <Toggle.Item {...args} />
      </Toggle.Root>
    )
  },
}
