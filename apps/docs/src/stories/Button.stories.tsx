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
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilita o botão',
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
    disabled: false,
  },
} as Meta<ButtonRootProps>

export const Default: StoryObj<ButtonRootProps> = {
  args: {
    children: 'Clique aqui',
  },
}

export const WithIconLeft: StoryObj<ButtonRootProps> = {
  argTypes: {
    children: {
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

export const WithIconRight: StoryObj<ButtonRootProps> = {
  argTypes: {
    children: {
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
