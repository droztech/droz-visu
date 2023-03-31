import { ComponentStory, Meta } from '@storybook/react'
import { Question } from 'phosphor-react'

import { Tooltip, TooltipTextProps } from '@coaktion/visu'

export default {
  title: 'Tooltip/Text',
  component: Tooltip.Text,
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
} as Meta<TooltipTextProps>

export const Comum: ComponentStory<typeof Tooltip.Text> = (args) => {
  return (
    <Tooltip.Text {...args}>
      <Question size={24} />
    </Tooltip.Text>
  )
}
