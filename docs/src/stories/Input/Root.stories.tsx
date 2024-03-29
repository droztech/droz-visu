import { Input, InputRootProps } from '@droz-js/visu'
import { Envelope } from '@phosphor-icons/react'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<InputRootProps> = {
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
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilita todos os elementos do componente.',
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
    status: undefined,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3107-18717&t=AdZjH6UtpERmhB5O-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type InputRootStory = StoryObj<InputRootProps>

export const Comum: InputRootStory = {
  render: (args) => {
    return (
      <div className="flex w-[80vw] items-center justify-center">
        <Input.Root {...args}>
          <Input.Input type="text" placeholder="Escreva seu nome aqui" />
        </Input.Root>
      </div>
    )
  },
}

export const ComIcone: InputRootStory = {
  render: (args) => {
    return (
      <div className="flex w-[80vw] items-center justify-center">
        <Input.Root {...args}>
          <Input.Input
            key="input"
            type="email"
            placeholder="Escreva seu email aqui"
          />
          <Input.Icon key="icon" icon={<Envelope />} />
        </Input.Root>
      </div>
    )
  },
}

export const ComIconeClicavel: InputRootStory = {
  render: (args) => {
    return (
      <div className="flex w-[80vw] items-center justify-center">
        <Input.Root {...args}>
          <Input.Input
            key="input"
            type="email"
            placeholder="Escreva seu email aqui"
          />
          <Input.Icon
            key="icon"
            icon={<Envelope />}
            onClick={() => console.log('Click')}
          />
        </Input.Root>
      </div>
    )
  },
}

export const ComIconeNaEsquerda: InputRootStory = {
  render: (args) => {
    return (
      <div className="flex w-[80vw] items-center justify-center">
        <Input.Root {...args}>
          <Input.Icon key="icon" icon={<Envelope />} />
          <Input.Input
            key="input"
            type="email"
            placeholder="Escreva seu email aqui"
          />
        </Input.Root>
      </div>
    )
  },
}

export const ComMaisDeUmIcone: InputRootStory = {
  render: (args) => {
    return (
      <div className="flex w-[80vw] items-center justify-center">
        <Input.Root {...args}>
          <Input.Icon key="icon" icon={<Envelope />} />
          <Input.Input
            key="input"
            type="email"
            placeholder="Escreva seu email aqui"
          />
          <Input.Icon key="icon2" icon={<Envelope />} />
        </Input.Root>
      </div>
    )
  },
}
