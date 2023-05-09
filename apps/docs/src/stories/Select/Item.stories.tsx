import { ComponentStory, Meta } from '@storybook/react'

import { Select, SelectItemProps } from '@coaktion/visu'

export default {
  title: 'Select/Item',
  component: Select.Item,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    value: {
      control: 'text',
      description: 'Aplica o value em SelectItem',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: true },
      defaultValue: '',
    },
    disabled: {
      control: 'boolean',
      description: 'Aplica o disabled em SelectRoot',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    children: '',
  },
} as Meta<SelectItemProps>

export const Comum: ComponentStory<typeof Select.Item> = (args) => {
  return (
    <Select.Root>
      <Select.Item {...args}>Valor</Select.Item>
    </Select.Root>
  )
}
