import { Meta, StoryObj } from '@storybook/react'
import { CheckCircle } from 'phosphor-react'

import { Button, ButtonIconProps } from '@coaktion/visu'

const meta: Meta<ButtonIconProps> = {
  title: 'Button/Icon',
  component: Button.Icon,
  argTypes: {
    children: {
      description: 'Ícone a ser exibido pelo componente.',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
  },
  args: {
    children: '',
  },
}

export default meta
type ButtonIconStory = StoryObj<ButtonIconProps>

export const Comum: ButtonIconStory = {
  render: (args) => {
    return (
      <Button.Icon {...args}>
        <CheckCircle />
      </Button.Icon>
    )
  },
}
