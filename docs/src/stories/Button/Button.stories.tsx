import { Button, ButtonProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'
import { CheckCircle } from 'phosphor-react'

const meta: Meta<ButtonProps> = {
  title: 'Button/Button',
  component: Button,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    asChild: {
      control: { type: 'boolean' },
      description:
        'Ao passar essa propriedade com o valor true, o componente irá se transformar no componente filho. É obrigatório passar um children ao utilizar essa propriedade. <b>Verifique a tag ao inspecionar o componente na DOM</b>.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilita o componente.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    ghost: {
      control: 'boolean',
      description: 'Aplica o estilo ghost ao componente.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    light: {
      control: 'boolean',
      description: 'Aplica o estilo light ao componente.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    loading: {
      control: { type: 'boolean' },
      description:
        'Ativa o loading do componente, desabilitando completamente as ações.',
      table: {
        type: { summary: 'booolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
      defaultValue: false as ButtonProps['loading'],
    },
    size: {
      control: { type: 'inline-radio' },
      description: 'Define o tamanho do componente.',
      options: ['lg', 'md', 'sm'],
      table: {
        type: {
          summary: ['lg', 'md', 'sm'].join('|'),
        },
        defaultValue: { summary: 'md' },
      },
      type: { name: 'string', required: false },
    },
    variant: {
      control: { type: 'inline-radio' },
      description: 'Define a variação de cor do componente.',
      options: ['primary', 'secondary', 'neutral'],
      table: {
        type: {
          summary: ['primary', 'secondary', 'neutral'].join('|'),
        },
        defaultValue: { summary: 'primary' },
      },
      type: { name: 'string', required: false },
    },
    onClick: {
      action: 'clicked',
      description: 'Evento de clique do componente.',
      table: { type: { summary: 'function' } },
    },
  },
  args: {
    children: '',
    asChild: false,
    disabled: false,
    ghost: false,
    light: false,
    loading: false,
    size: 'md',
    variant: 'primary',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3107-18885&t=i2mg4ixu1iYnYf6w-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type ButtonStory = StoryObj<ButtonProps>

export const Comum: ButtonStory = {
  argTypes: {
    asChild: {
      control: 'none',
    },
  },
  render: (args) => {
    return (
      <div className="flex w-[80vw] items-center justify-center">
        <Button {...args}>Clique aqui</Button>
      </div>
    )
  },
}

export const ComIcone: ButtonStory = {
  argTypes: {
    children: {
      control: 'none',
    },
    asChild: {
      control: 'none',
    },
  },
  render: (args) => {
    return (
      <div className="flex w-[80vw] items-center justify-center">
        <Button {...args}>
          Clique aqui
          <CheckCircle />
        </Button>
      </div>
    )
  },
}

export const ComIconeNaEsquerda: ButtonStory = {
  argTypes: {
    children: {
      control: 'none',
    },
    asChild: {
      control: 'none',
    },
  },
  render: (args) => {
    return (
      <div className="flex w-[80vw] items-center justify-center">
        <Button {...args}>
          <CheckCircle />
          Clique aqui
        </Button>
      </div>
    )
  },
}

export const ComoTagAnchor: ButtonStory = {
  args: {
    asChild: true,
  },
  argTypes: {
    children: {
      control: 'none',
    },
  },
  render: (args) => {
    return (
      <div className="flex w-[80vw] items-center justify-center">
        <Button {...args}>
          <a href="/">Link</a>
        </Button>
      </div>
    )
  },
}
