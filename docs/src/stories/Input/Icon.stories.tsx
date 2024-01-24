import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'

import { Input, InputIconProps } from '@droz-js/visu'

const meta: Meta<InputIconProps> = {
  title: 'Input/Icon',
  component: Input.Icon,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilita o ícone',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    disabled: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3119-16270&t=AdZjH6UtpERmhB5O-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type InputIconStory = StoryObj<InputIconProps>

export const Comum: InputIconStory = {
  render: (args) => {
    return (
      <Input.Icon {...args}>
        <Envelope />
      </Input.Icon>
    )
  },
}

export const ComAcaoDeClique: InputIconStory = {
  argTypes: {
    onClick: {
      action: 'clicked',
      description: 'Define o evento de click',
      table: { type: { summary: 'function' } },
    },
  },
  render: (args) => {
    return (
      <Input.Icon {...args} onClick={() => {}}>
        <Envelope />
      </Input.Icon>
    )
  },
}
