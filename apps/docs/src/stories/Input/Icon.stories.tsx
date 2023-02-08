import { ComponentStory, Meta } from '@storybook/react'
import { Envelope } from 'phosphor-react'

import { Input, InputIconProps } from '@coaktion/visu'

export default {
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
} as Meta<InputIconProps>

const Template: ComponentStory<typeof Input.Icon> = (args) => {
  return (
    <Input.Icon {...args}>
      <Envelope />
    </Input.Icon>
  )
}

export const Comum = Template.bind({})

export const ComAcaoDeClique = Template.bind({})
ComAcaoDeClique.argTypes = {
  onClick: {
    action: 'clicked',
    description: 'Define o evento de click',
    table: { type: { summary: 'function' } },
  },
}
