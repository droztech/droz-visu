import { ComponentStory, Meta } from '@storybook/react'
import { CheckCircle } from 'phosphor-react'

import { Button, ButtonIconProps } from '@coaktion/visu'

export default {
  title: 'Button/Icon',
  component: Button.Icon,
  argTypes: {
    children: {
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
} as Meta<ButtonIconProps>

const Template: ComponentStory<typeof Button.Icon> = (args) => {
  return (
    <Button.Icon {...args}>
      <CheckCircle />
    </Button.Icon>
  )
}

export const Comum = Template.bind({})
