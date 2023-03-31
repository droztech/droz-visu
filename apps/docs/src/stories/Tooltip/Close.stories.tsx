import { ComponentStory, Meta } from '@storybook/react'
import { Question } from 'phosphor-react'

import { Tooltip, TooltipCloseProps } from '@coaktion/visu'

export default {
  title: 'Tooltip/Close',
  component: Tooltip.Close,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    text: {
      control: 'text',
      description: 'Texto do tooltip',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
      type: { name: 'string', required: true },
      defaultValue: 'Texto do Tooltip',
    },
  },
  args: {
    children: '',
  },
} as Meta<TooltipCloseProps>

export const Comum: ComponentStory<typeof Tooltip.Close> = (args) => {
  return (
    <Tooltip.Close {...args}>
      <Question size={24} />
    </Tooltip.Close>
  )
}
