import { Meta, StoryObj } from '@storybook/react'
import { Question } from 'phosphor-react'

import { Tooltip, TooltipStepProps } from '@coaktion/visu'

const meta: Meta<TooltipStepProps> = {
  title: 'Tooltip/Step',
  component: Tooltip.Step,
  argTypes: {
    children: {
      control: 'none',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    closeText: {
      control: 'text',
      description:
        'Propriedade que recebe o texto do botão que finaliza as etapas.',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
      type: { name: 'string', required: false },
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
    nextText: {
      control: 'text',
      description:
        'Propriedade que recebe o texto do botão que passa para a próxima etapa.',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
      type: { name: 'string', required: false },
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
    stepText: {
      control: 'text',
      description:
        'Propriedade que recebe o texto que aparece junto à marcação de etapa.',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
      type: { name: 'string', required: false },
    },
    text: {
      control: 'object',
      description: 'Propriedade que recebe um array com textos de cada etapa.',
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: [] },
      },
      type: { name: 'string', required: true },
    },
  },
  args: {
    children: '',
    closeText: 'Finalizar',
    defaultOpen: false,
    nextText: 'Próximo',
    side: 'bottom',
    stepText: 'Etapa',
    text: ['Etapa 1', 'Etapa 2'],
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3109-16644&t=NDiO1Vda4DCr6uFV-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type TooltipStepStory = StoryObj<TooltipStepProps>

export const Comum: TooltipStepStory = {
  render: (args) => {
    return (
      <Tooltip.Step {...args}>
        <Question size={24} />
      </Tooltip.Step>
    )
  },
}
