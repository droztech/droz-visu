import { ComponentStory, Meta } from '@storybook/react'
import { House } from 'phosphor-react'

import { Menu, MenuButtonProps } from '@coaktion/visu'

export default {
  title: 'Menu/Button',
  component: Menu.Button,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    icon: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      type: { name: 'function', required: true },
    },
    text: {
      control: 'text',
      description: 'Texto do botão',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'Home' },
      },
      type: { name: 'string', required: true },
    },
  },
  args: {
    children: '',
  },
} as Meta<MenuButtonProps>

export const Comum: ComponentStory<typeof Menu.Button> = (args) => {
  args.icon = <House />

  return <Menu.Button {...args}></Menu.Button>
}
