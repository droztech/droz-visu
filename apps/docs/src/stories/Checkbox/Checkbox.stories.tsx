import { useArgs } from '@storybook/client-api'
import { ComponentStory, Meta } from '@storybook/react'

import { Checkbox, CheckboxProps } from '@coaktion/visu'

export default {
  title: 'Checkbox/Checkbox',
  component: Checkbox,
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
      description: 'Aplica o color em Checkbox',
      options: ['primary', 'secondary'] as CheckboxProps['color'][],
      table: {
        type: {
          summary: ['primary', 'secondary'].join('|'),
        },
      },
      type: { name: 'string', required: false },
      defaultValue: 'primary' as CheckboxProps['color'],
    },
    disabled: {
      control: 'boolean',
      description: 'Aplica o disabled em Checkbox',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
    checked: {
      control: 'boolean',
      description: 'Aplica o checked em Checkbox',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
    onCheckedChange: {
      action: 'clicked',
      description: 'Define o onCheckedChange em Checkbox',
      table: { type: { summary: 'function' } },
    },
  },
  args: {
    children: '',
  },
} as Meta<CheckboxProps>

export const Comum: ComponentStory<typeof Checkbox> = (args) => {
  const [{ checked }, updateArgs] = useArgs()
  delete args.onCheckedChange

  const toggleChecked = () => {
    updateArgs({ checked: !checked })
  }

  return <Checkbox onCheckedChange={toggleChecked} {...args} />
}
