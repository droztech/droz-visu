import { TagInput, TagInputInputProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<TagInputInputProps> = {
  title: 'TagInput/Input',
  component: TagInput.Input,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder do TagInput',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: '',
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilita o TagInput',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    keys: {
      control: 'object',
      description: 'Aplica o keys em InputCopyInput',
      table: {
        type: { summary: 'object' },
        defaultValue: { summary: ['Comma'] },
      },
      type: { name: 'string', required: false },
      defaultValue: ['Comma'] as TagInputInputProps['keys'],
    },
  },
  args: {
    placeholder: 'Escreva seu email aqui',
    disabled: false,
  },
}

export default meta
type TagInputTagInputStory = StoryObj<TagInputInputProps>

export const Comum: TagInputTagInputStory = {
  render: (args) => {
    return (
      <>
        TagInput comum com todas as propriedades de um TagInput comum
        <br />
        <TagInput.Input {...args} />
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

export const Password: TagInputTagInputStory = {
  args: {
    placeholder: 'Digite a senha',
  },
  render: (args) => {
    return (
      <>
        TagInput comum com todas as propriedades de um TagInput comum. Com um
        type password aplicado.
        <br />
        <TagInput.Input type="password" {...args} />
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
