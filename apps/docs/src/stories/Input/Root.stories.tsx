import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { withDesign } from 'storybook-addon-designs'

import { Input, InputRootProps } from '@coaktion/visu'

const meta: Meta<InputRootProps> = {
  title: 'Input/Root',
  component: Input.Root,
  decorators: [withDesign],
  argTypes: {
    children: {
      control: 'none',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilita todos os elementos do componente.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    full: {
      control: { type: 'boolean' },
      description:
        'Faz com que o componente preencha todo o espaço disponível.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    status: {
      control: { type: 'select' },
      description: 'Define o status do componente.',
      options: ['default', 'error', 'success'],
      table: {
        type: {
          summary: ['default', 'error', 'success'].join('|'),
        },
      },
      type: { name: 'string', required: false },
    },
  },
  args: {
    children: '',
    disabled: false,
    full: false,
    status: undefined,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3107-18717&t=AdZjH6UtpERmhB5O-0',
    },
  },
}

export default meta
type InputRootStory = StoryObj<InputRootProps>

export const Comum: InputRootStory = {
  args: {
    children: <Input.Input type="text" placeholder="Escreva seu nome aqui" />,
  },
}

export const ComIcone: InputRootStory = {
  render: (args) => {
    return (
      <Input.Root {...args}>
        <Input.Input
          key="input"
          type="email"
          placeholder="Escreva seu email aqui"
        />
        <Input.Icon key="icon">
          <Envelope />
        </Input.Icon>
      </Input.Root>
    )
  },
}

export const ComIconeClicavel: InputRootStory = {
  render: (args) => {
    return (
      <Input.Root {...args}>
        <Input.Input
          key="input"
          type="email"
          placeholder="Escreva seu email aqui"
        />
        <Input.Icon key="icon" onClick={() => console.log('clicou')}>
          <Envelope />
        </Input.Icon>
      </Input.Root>
    )
  },
}

export const ComIconeNaEsquerda: InputRootStory = {
  render: (args) => {
    return (
      <Input.Root {...args}>
        <Input.Icon key="icon">
          <Envelope />
        </Input.Icon>
        <Input.Input
          key="input"
          type="email"
          placeholder="Escreva seu email aqui"
        />
      </Input.Root>
    )
  },
}

export const ComMaisDeUmIcone: InputRootStory = {
  render: (args) => {
    return (
      <Input.Root {...args}>
        <Input.Icon key="icon1">
          <Envelope />
        </Input.Icon>
        <Input.Input
          key="input"
          type="email"
          placeholder="Escreva seu email aqui"
        />
        <Input.Icon key="icon2">
          <Envelope />
        </Input.Icon>
        <Input.Icon key="icon3">
          <Envelope />
        </Input.Icon>
      </Input.Root>
    )
  },
}
