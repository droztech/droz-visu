import { Meta, StoryObj } from '@storybook/react'

import { Input, InputInputProps } from '@droz-js/visu'

const meta: Meta<InputInputProps> = {
  title: 'Input/Input',
  component: Input.Input,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder do input',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: '',
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilita o input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    placeholder: 'Escreva seu email aqui',
    disabled: false,
  },
}

export default meta
type InputInputStory = StoryObj<InputInputProps>

export const Comum: InputInputStory = {
  render: (args) => {
    return (
      <>
        Input comum com todas as propriedades de um input comum
        <br />
        <Input.Input {...args} />
      </>
    )
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3107-18717&t=AdZjH6UtpERmhB5O-0',
      allowFullscreen: true,
    },
  },
}

export const Password: InputInputStory = {
  args: {
    placeholder: 'Digite a senha',
  },
  render: (args) => {
    return (
      <>
        Input comum com todas as propriedades de um input comum. Com um type
        password aplicado.
        <br />
        <Input.Input type="password" {...args} />
      </>
    )
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3119-16270&t=AdZjH6UtpERmhB5O-0',
      allowFullscreen: true,
    },
  },
}
