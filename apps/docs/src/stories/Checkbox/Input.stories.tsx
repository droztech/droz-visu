import { useArgs } from '@storybook/client-api'
import { ComponentStory, Meta } from '@storybook/react'

import { Checkbox, CheckboxInputProps } from '@coaktion/visu'

export default {
  title: 'Checkbox/Input',
  component: Checkbox.Input,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    color: {
      control: 'inline-radio',
      description: 'Aplica o color em CheckboxInput',
      options: ['primary', 'secondary'] as CheckboxInputProps['color'][],
      table: {
        type: {
          summary: ['primary', 'secondary'].join('|'),
        },
      },
      type: { name: 'string', required: false },
      defaultValue: 'primary' as CheckboxInputProps['color'],
    },
    disabled: {
      control: 'boolean',
      description: 'Aplica o disabled em CheckboxInput',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
    checked: {
      control: 'boolean',
      description: 'Aplica o checked em CheckboxInput',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
    onCheckedChange: {
      action: 'clicked',
      description: 'Define o onCheckedChange em CheckboxInput',
      table: { type: { summary: 'function' } },
    },
  },
  args: {
    children: '',
  },
} as Meta<CheckboxInputProps>

export const Comum: ComponentStory<typeof Checkbox.Input> = (args) => {
  const [{ checked }, updateArgs] = useArgs()
  delete args.onCheckedChange

  const toggleChecked = () => {
    updateArgs({ checked: !checked })
  }

  return <Checkbox.Input onCheckedChange={toggleChecked} {...args} />
}
