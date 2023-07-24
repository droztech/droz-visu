import { Button, ButtonIconProps } from '@coaktion/visu'
import { Meta, StoryObj } from '@storybook/react'
import { CheckCircle } from 'phosphor-react'

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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3107-18885&t=i2mg4ixu1iYnYf6w-0',
      allowFullscreen: true,
    },
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
