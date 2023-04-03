import { ComponentStory, Meta } from '@storybook/react'
import { Question } from 'phosphor-react'

import { Tooltip, TooltipHoverProps } from '@coaktion/visu'

export default {
  title: 'Tooltip/Hover',
  component: Tooltip.Hover,
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
    side: {
      control: { type: 'inline-radio' },
      description: 'Define o lado tooltip',
      options: [
        'bottom',
        'left',
        'right',
        'top',
      ] as TooltipHoverProps['side'][],
      table: {
        type: {
          summary: ['bottom', 'left', 'right', 'top'].join('|'),
        },
      },
      type: { name: 'string', required: false },
    },
  },
  args: {
    children: '',
  },
} as Meta<TooltipHoverProps>

export const Comum: ComponentStory<typeof Tooltip.Hover> = (args) => {
  return (
    <Tooltip.Hover {...args}>
      <Question size={24} />
    </Tooltip.Hover>
  )
}
