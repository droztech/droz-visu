import { Meta, StoryObj } from '@storybook/react'
import { CheckCircle } from 'phosphor-react'

import { Button, ButtonRootProps } from '@coaktion/visu'

export default {
  title: 'Button/Root',
  component: Button.Root,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    size: {
      control: { type: 'inline-radio' },
      description: 'Define o tamanho do botão',
      options: ['sm', 'md', 'lg'],
      table: {
        type: {
          summary: ['sm', 'md', 'lg'].join('|'),
        },
        defaultValue: { summary: 'md' },
      },
      type: { name: 'string', required: false },
    },
    ghost: {
      control: 'boolean',
      description: 'Aplica o estilo ghost',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    light: {
      control: 'boolean',
      description: 'Aplica o estilo light',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilita o botão',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    asChild: {
      control: { type: 'boolean' },
      description:
        'Ao passar essa propriedade com o valor true, o componente irá se transformar no componente filho. É obrigatório passar um children ao utilizar essa propriedade. <b>Verifique a tag ao inspecionar o componente na DOM</b>',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    full: {
      control: { type: 'boolean' },
      description: 'Faz com que o input preencha todo o espaço disponível',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    onClick: {
      action: 'clicked',
      description: 'Define o evento de click',
      table: { type: { summary: 'function' } },
    },
  },
  args: {
    children: '',
    size: 'md',
    ghost: false,
    light: false,
    disabled: false,
    asChild: false,
    full: false,
  },
} as Meta<ButtonRootProps>

export const Comum: StoryObj<ButtonRootProps> = {
  argTypes: {
    asChild: {
      control: 'none',
    },
  },
  args: {
    children: 'Clique aqui',
  },
}

export const ComIcone: StoryObj<ButtonRootProps> = {
  argTypes: {
    children: {
      control: 'none',
    },
    asChild: {
      control: 'none',
    },
  },
  args: {
    children: [
      'Clique aqui',
      <Button.Icon key="icon">
        <CheckCircle />
      </Button.Icon>,
    ],
  },
}

export const ComIconeNaEsquerda: StoryObj<ButtonRootProps> = {
  argTypes: {
    children: {
      control: 'none',
    },
    asChild: {
      control: 'none',
    },
  },
  args: {
    children: [
      <Button.Icon key="icon">
        <CheckCircle />
      </Button.Icon>,
      'Clique aqui',
    ],
  },
}

export const ComoTagAnchor: StoryObj<ButtonRootProps> = {
  argTypes: {
    children: {
      control: 'none',
    },
  },
  args: {
    asChild: true,
    children: <a href="/">Link</a>,
  },
}
