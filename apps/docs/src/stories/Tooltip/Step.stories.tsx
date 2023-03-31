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
      type: { name: 'string', required: true },
      defaultValue: 'Próximo',
    },
    stepText: {
      control: 'text',
      description: 'Texto do tooltip',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
      type: { name: 'string', required: true },
      defaultValue: 'Etapa',
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
