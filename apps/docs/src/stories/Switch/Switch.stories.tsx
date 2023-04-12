import { useArgs } from '@storybook/client-api'
import { ComponentStory, Meta } from '@storybook/react'

import { Switch, SwitchProps } from '@coaktion/visu'

export default {
  title: 'Switch/Switch',
  component: Switch,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Aplica o disabled em Switch',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
    checked: {
      control: 'boolean',
      description: 'Aplica o checked em Switch',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
    onCheckedChange: {
      action: 'clicked',
      description: 'Define o onCheckedChange em Switch',
      table: { type: { summary: 'function' } },
    },
  },
  args: {
    children: '',
  },
} as Meta<SwitchProps>

export const Comum: ComponentStory<typeof Switch> = (args) => {
  const [{ checked }, updateArgs] = useArgs()
  delete args.onCheckedChange

  const toggleChecked = () => {
    updateArgs({ checked: !checked })
  }

  return <Switch onCheckedChange={toggleChecked} {...args}></Switch>
}
