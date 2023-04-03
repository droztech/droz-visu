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
    defaultOpen: {
      control: 'boolean',
      description: 'Inicia o tooltip já aberto',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    side: {
      control: { type: 'inline-radio' },
      description: 'Define o lado tooltip',
      options: [
        'bottom',
        'left',
        'right',
        'top',
      ] as TooltipCloseProps['side'][],
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
} as Meta<TooltipCloseProps>

export const Comum: ComponentStory<typeof Tooltip.Close> = (args) => {
  return (
    <Tooltip.Close {...args}>
      <Question size={24} />
    </Tooltip.Close>
  )
}
