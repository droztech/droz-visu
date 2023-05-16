import { Meta, StoryObj } from '@storybook/react'
import { Question } from 'phosphor-react'

import { Tooltip, TooltipHoverProps } from '@coaktion/visu'

const meta: Meta<TooltipHoverProps> = {
  title: 'Tooltip/Hover',
  component: Tooltip.Hover,
  argTypes: {
    children: {
      control: 'none',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    side: {
      control: { type: 'inline-radio' },
      description:
        'Define o local em que o componente irá aparecer, relativo ao trigger.',
      options: ['bottom', 'left', 'right', 'top'],
      table: {
        type: {
          summary: ['bottom', 'left', 'right', 'top'].join('|'),
        },
        defaultValue: { summary: 'bottom' },
      },
      type: { name: 'string', required: false },
    },
    text: {
      control: 'text',
      description: 'Define o valor em texto do componente.',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: true },
    },
  },
  args: {
    children: '',
    side: 'bottom',
    text: 'Texto do tooltip',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3107-18351&t=NDiO1Vda4DCr6uFV-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type TooltipHoverStory = StoryObj<TooltipHoverProps>

export const Comum: TooltipHoverStory = {
  render: (args) => {
    return (
      <Tooltip.Hover {...args}>
        <Question size={24} />
      </Tooltip.Hover>
    )
  },
}
