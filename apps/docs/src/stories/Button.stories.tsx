import { Meta, StoryObj } from '@storybook/react'
import { CheckCircle } from 'phosphor-react'

import { Button, ButtonRootProps } from '@coaktion/visu'

export default {
  title: 'Components/Button',
  component: Button.Root,
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'md',
    },
    ghost: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    onClick: () => console.log('click'),
  },
} as Meta<ButtonRootProps>

export const Default: StoryObj<ButtonRootProps> = {
  argTypes: {
    children: {
      control: { type: 'text' },
      defaultValue: 'Clique Aqui',
    },
  },
}

export const WithIconLeft: StoryObj<ButtonRootProps> = {
  args: {
    children: (
      <>
        <Button.Icon>
          <CheckCircle />
        </Button.Icon>
        Clique aqui
      </>
    ),
  },
}

export const WithIconRight: StoryObj<ButtonRootProps> = {
  args: {
    children: (
      <>
        Clique aqui
        <Button.Icon>
          <CheckCircle />
        </Button.Icon>
      </>
    ),
  },
}
