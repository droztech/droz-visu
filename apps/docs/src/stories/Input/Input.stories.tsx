import { ComponentStory, Meta } from '@storybook/react'

import { Input, InputInputProps } from '@coaktion/visu'

export default {
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
} as Meta<InputInputProps>

const Template: ComponentStory<typeof Input.Input> = (args) => {
  return (
    <>
      Input comum com todas as propriedades de um input comum
      <br />
      <Input.Input {...args} />
    </>
  )
}

export const Comum = Template.bind({})
