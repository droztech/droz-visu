import { Meta, StoryObj } from '@storybook/react'

import { OTPInput, OTPInputProps } from '@coaktion/visu'

const meta: Meta<OTPInputProps> = {
  title: 'OTPInput/OTPInput',
  component: OTPInput,
  argTypes: {
    count: {
      control: 'number',
      description:
        'Define a quantidade de entradas do componente. <b>É necessário recarregar a página para ver a modificação</b>.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
      type: { name: 'number', required: true },
    },
    error: {
      control: 'boolean',
      description: 'Propriedade que aplica um estado de erro ao componente.',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
    value: {
      control: 'none',
      description:
        'Propriedade que armazena o valor atual do componente. <b>Exemplo: Se estiver exibindo 1 2 3 4 5, o valor atual será ["1", "2", "3", "4", "5"]</b>.',
      table: {
        type: { summary: 'string[]' },
        defaultValue: { summary: '[""]' },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Evento de modificação do valor do componente.',
      table: { type: { summary: 'function' } },
    },
  },
  args: {
    count: 1,
    error: false,
    value: [],
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3426-863&t=AdZjH6UtpERmhB5O-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type OTPInputStory = StoryObj<OTPInputProps>

export const Comum: OTPInputStory = {
  render: (args) => {
    return <OTPInput {...args} />
  },
}

export const MaisDigitos: OTPInputStory = {
  args: {
    count: 5,
  },
  render: (args) => {
    return <OTPInput {...args} />
  },
}
