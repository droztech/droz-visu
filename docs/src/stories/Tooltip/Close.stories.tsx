import { Button, Tooltip, TooltipCloseProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'
import { Question } from 'phosphor-react'

const meta: Meta<TooltipCloseProps> = {
  title: 'Tooltip/Close',
  component: Tooltip.Close,
  argTypes: {
    children: {
      control: 'none',
      description: 'Trigger do Tooltip, exibe o Tooltip ao clicar.',
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
      control: 'none',
      description: 'Propriedade que define se o componente inicialmente está visível ou não.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    onOpenChange: {
      control: 'none',
      description: 'Callback executado quando o estado de `open` é alterado.',
      table: {
        type: { summary: 'function' },
      },
      type: { name: 'function', required: false },
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
    closeTime: {
      control: 'number',
      description: 'Define o tempo em milissegundos para fechar o conteúdo do Tooltip.',
      table: {
        type: { summary: 'number' },
      },
      type: { name: 'number', required: false },
    },
    closeButton: {
      control: 'boolean',
      description: 'Define se o tooltip terá um botão de close ou não.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      type: { name: 'boolean', required: false },
      defaultValue: true,
    },
    side: {
      control: { type: 'inline-radio' },
      description: 'Define o local em que o componente irá aparecer, relativo ao trigger.',
      options: ['bottom', 'left', 'right', 'top'],
      table: {
        type: {
          summary: ['bottom', 'left', 'right', 'top'].join('|'),
        },
        defaultValue: { summary: 'bottom' },
      },
      type: { name: 'string', required: false },
    },

    /**
     * @deprecated - Deprecated props will be removed in the next major version.
     */
    text: {
      control: 'none',
      name: 'text (deprecated)',
      description: '<s>Define o valor em texto do componente.</s> (deprecated) - Use a propriedade `content`.',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: false },
    },
  },
  args: {
    children: '',
    content: 'Texto do tooltip',
    defaultOpen: false,
    side: 'bottom',
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

export const ComTexto: TooltipClose = {
  name: 'Com texto',
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

export const ComReactNode: TooltipClose = {
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
      <Tooltip.Close {...args}>
        <div style={{ display: 'flex', gap: '8px' }}>
          Clique para abrir
          <Question size={24} />
        </div>
      </Tooltip.Close>
    )
  },
}
