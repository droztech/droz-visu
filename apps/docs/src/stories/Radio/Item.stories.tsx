import { ComponentStory, Meta } from '@storybook/react'
import { useState } from 'react'

import { Radio, RadioItemProps } from '@coaktion/visu'

export default {
  title: 'Radio/Item',
  component: Radio.Item,
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
      description: 'Aplica o color em RadioItem',
      options: ['primary', 'secondary'] as RadioItemProps['color'][],
      table: {
        type: {
          summary: ['primary', 'secondary'].join('|'),
        },
      },
      type: { name: 'string', required: false },
      defaultValue: 'primary' as RadioItemProps['color'],
    },
    disabled: {
      control: 'boolean',
      description: 'Aplica o disabled em RadioItem',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    children: '',
  },
} as Meta<RadioItemProps>

export const Comum: ComponentStory<typeof Radio.Item> = (args) => {
  const [value, setValue] = useState('yes')

  return (
    <Radio.Root value={value} onValueChange={(ev) => setValue(ev)}>
      <Radio.Item {...args} value="yes" currentValue={value}>
        Yes
      </Radio.Item>
      <Radio.Item {...args} value="no" currentValue={value}>
        No
      </Radio.Item>
      <Radio.Item {...args} value="maybe" currentValue={value}>
        Maybe
      </Radio.Item>
    </Radio.Root>
  )
}
