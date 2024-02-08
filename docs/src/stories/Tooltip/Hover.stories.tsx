import { Button, Tooltip, TooltipHoverProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'
import { Question } from 'phosphor-react'

const meta: Meta<TooltipHoverProps> = {
  title: 'Tooltip/Hover',
  component: Tooltip.Hover,
  argTypes: {
    children: {
      control: 'none',
      description: 'Trigger do Tooltip.',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    content: {
      control: 'text',
      description: 'Define o conteúdo exibido no Tooltip.',
      table: {
        type: { summary: 'React.ReactNode' },
      },
      type: { name: 'string', required: false },
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Define se o Tooltip deve iniciar aberto ou fechado.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      type: { name: 'boolean', required: false },
    },
    closeTime: {
      control: 'number',
      description:
        'Define o tempo em milissegundos para fechar o conteúdo do Tooltip.',
      table: {
        type: { summary: 'number' },
      },
      type: { name: 'number', required: false },
    },
    delayDuration: {
      control: 'number',
      description:
        'Define o tempo de delay em milissegundos para exibir o conteúdo do Tooltip.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '300' },
      },
      type: { name: 'number', required: false },
    },
    open: {
      control: 'boolean',
      description: 'Define se o conteúdo do Tooltip está visível ou não.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    onOpenChange: {
      control: 'none',
      description: 'Callback executado quando o estado de `open` é alterado.',
      table: {
        type: { summary: 'function' },
      },
      type: { name: 'function', required: false },
    },
  },
  args: {
    children: '',
    content: 'Texto do tooltip',
    defaultOpen: false,
    delayDuration: 300,
    open: false,
    side: 'bottom',
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

export const ComTexto: TooltipHoverStory = {
  name: 'Com texto',
  render: (args) => {
    return (
      <Tooltip.Hover {...args}>
        <Question size={24} />
      </Tooltip.Hover>
    )
  },
}

export const ComReactNode: TooltipHoverStory = {
  name: 'Com ReactNode',
  args: {
    content: (
      <>
        <p>Texto do tooltip</p>
        <Button.Root>Button do tooltip</Button.Root>
      </>
    ),
  },
  argTypes: {
    content: {
      control: 'none',
    },
  },
  render: (args) => {
    return (
      <Tooltip.Hover {...args}>
        <Question size={24} />
      </Tooltip.Hover>
    )
  },
}
