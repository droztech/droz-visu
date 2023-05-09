import { ComponentStory, Meta } from '@storybook/react'

import { Select, SelectRootProps } from '@coaktion/visu'

export default {
  title: 'Select/Root',
  component: Select.Root,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Aplica o placeholder em SelectRoot',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: false },
    },
    position: {
      control: 'inline-radio',
      description: 'Aplica o position em SelectRoot',
      options: ['popper', 'item-aligned'] as SelectRootProps['position'][],
      table: {
        type: {
          summary: ['popper', 'item-aligned'].join('|'),
        },
      },
      type: { name: 'string', required: false },
      defaultValue: 'popper' as SelectRootProps['position'],
    },
    disabled: {
      control: 'boolean',
      description: 'Aplica o disabled em SelectRoot',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
    value: {
      control: 'text',
      description: 'Aplica o value em SelectRoot',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: false },
      defaultValue: '',
    },
    align: {
      control: 'inline-radio',
      description: 'Aplica o align em SelectRoot',
      options: ['center', 'start', 'end'] as SelectRootProps['align'][],
      table: {
        type: {
          summary: ['center', 'start', 'end'].join('|'),
        },
      },
      type: { name: 'string', required: false },
    },
    full: {
      control: 'boolean',
      description: 'Aplica o full em SelectRoot',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    children: '',
  },
} as Meta<SelectRootProps>

export const Comum: ComponentStory<typeof Select.Root> = (args) => {
  return (
    <Select.Root {...args}>
      <Select.Item value="yes">Sim</Select.Item>
      <Select.Item value="no">Não</Select.Item>
    </Select.Root>
  )
}
