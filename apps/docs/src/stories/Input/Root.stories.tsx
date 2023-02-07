import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'

import { Input, InputRootProps } from '@coaktion/visu'

export default {
  title: 'Input/Root',
  component: Input.Root,
  argTypes: {
    children: {
      control: 'none',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    status: {
      control: { type: 'select' },
      description: 'Define o status do input',
      options: [undefined, 'error', 'success'],
      table: {
        type: {
          summary: ['error', 'success'].join('|'),
        },
      },
      type: { name: 'string', required: false },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilita todos os elementos do input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    children: '',
    status: undefined,
    disabled: false,
  },
} as Meta<InputRootProps>

export const Comum: StoryObj<InputRootProps> = {
  args: {
    children: <Input.Input type="text" placeholder="Escreva seu nome aqui" />,
  },
}

export const ComIcone: StoryObj<InputRootProps> = {
  args: {
    children: [
      <Input.Input
        key="input"
        type="email"
        placeholder="Escreva seu email aqui"
      />,
      <Input.Icon key="icon">
        <Envelope />
      </Input.Icon>,
    ],
  },
}

export const ComIconeClicavel: StoryObj<InputRootProps> = {
  args: {
    children: [
      <Input.Input
        key="input"
        type="email"
        placeholder="Escreva seu email aqui"
      />,
      <Input.Icon key="icon" onClick={() => console.log('clicou')}>
        <Envelope />
      </Input.Icon>,
    ],
  },
}

export const ComIconeNaEsquerda: StoryObj<InputRootProps> = {
  args: {
    children: [
      <Input.Icon key="icon">
        <Envelope />
      </Input.Icon>,
      <Input.Input
        key="input"
        type="email"
        placeholder="Escreva seu email aqui"
      />,
    ],
  },
}

export const ComMaisDeUmIcone: StoryObj<InputRootProps> = {
  args: {
    children: [
      <Input.Icon key="icon1">
        <Envelope />
      </Input.Icon>,
      <Input.Input
        key="input"
        type="email"
        placeholder="Escreva seu email aqui"
      />,
      <Input.Icon key="icon2">
        <Envelope />
      </Input.Icon>,
      <Input.Icon key="icon3">
        <Envelope />
      </Input.Icon>,
    ],
  },
}
