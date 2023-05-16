import { Meta, StoryObj } from '@storybook/react'
import { Question } from 'phosphor-react'

import { Tooltip, TooltipCloseProps } from '@coaktion/visu'

const meta: Meta<TooltipCloseProps> = {
  title: 'Tooltip/Close',
  component: Tooltip.Close,
  argTypes: {
    children: {
      control: 'none',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    defaultOpen: {
      control: 'none',
      description:
        'Propriedade que define se o componente inicialmente está visível ou não.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
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
    defaultOpen: false,
    side: 'bottom',
    text: 'Texto do tooltip',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3109-16282&t=NDiO1Vda4DCr6uFV-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type TooltipClose = StoryObj<TooltipCloseProps>

export const Comum: TooltipClose = {
  render: (args) => {
    return (
      <Tooltip.Close {...args}>
        <div style={{ display: 'flex', gap: '8px' }}>
          Clique para abrir
          <Question size={24} />
        </div>
      </Tooltip.Close>
    )
  },
}
