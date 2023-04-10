import { useArgs } from '@storybook/client-api'
import { ComponentStory, Meta } from '@storybook/react'

import { Radio, RadioRootProps } from '@coaktion/visu'

export default {
  title: 'Radio/Root',
  component: Radio.Root,
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
      description: 'Aplica o value em RadioItem',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
      type: { name: 'string', required: true },
      defaultValue: '' as RadioRootProps['value'],
    },
    onValueChange: {
      action: 'clicked',
      description: 'Define o onValueChange em RadioItem',
      table: { type: { summary: 'function' } },
    },
  },
  args: {
    children: '',
  },
} as Meta<RadioRootProps>

export const Comum: ComponentStory<typeof Radio.Root> = (args) => {
  const [{ value }, updateArgs] = useArgs()
  delete args.onValueChange
  delete args.value

  const toggleValue = (ev: string) => {
    updateArgs({ value: ev })
  }

  return (
    <Radio.Root value={value} onValueChange={toggleValue}>
      <Radio.Item value="yes" currentValue={value ?? ''}>
        Yes
      </Radio.Item>
      <Radio.Item value="no" currentValue={value ?? ''}>
        No
      </Radio.Item>
      <Radio.Item value="maybe" currentValue={value ?? ''}>
        Maybe
      </Radio.Item>
    </Radio.Root>
  )
}
