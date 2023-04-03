import { ComponentStory, Meta } from '@storybook/react'
import { Question } from 'phosphor-react'

import { Tooltip, TooltipStepProps } from '@coaktion/visu'

export default {
  title: 'Tooltip/Step',
  component: Tooltip.Step,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    text: {
      control: 'object',
      description: 'Texto do tooltip',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
      type: { name: 'string', required: true },
      defaultValue: ['Texto do Step1', 'Texto do Step2', 'Texto do Step3'],
    },
    nextText: {
      control: 'text',
      description: 'Texto do tooltip',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
      type: { name: 'string', required: false },
    },
    stepText: {
      control: 'text',
      description: 'Texto do tooltip',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
      type: { name: 'string', required: false },
    },
    closeText: {
      control: 'text',
      description: 'Texto do tooltip',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
      type: { name: 'string', required: false },
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
      options: ['bottom', 'left', 'right', 'top'] as TooltipStepProps['side'][],
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
} as Meta<TooltipStepProps>

export const Comum: ComponentStory<typeof Tooltip.Step> = (args) => {
  return (
    <Tooltip.Step {...args}>
      <Question size={24} />
    </Tooltip.Step>
  )
}
