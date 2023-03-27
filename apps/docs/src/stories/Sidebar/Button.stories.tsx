import { ComponentStory, Meta } from '@storybook/react'
import { House } from 'phosphor-react'

import { Sidebar, SidebarButtonProps } from '@coaktion/visu'

export default {
  title: 'Sidebar/Button',
  component: Sidebar.Button,
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
} as Meta<SidebarButtonProps>

export const Comum: ComponentStory<typeof Sidebar.Button> = (args) => {
  args.icon = <House />

  return <Sidebar.Button {...args}></Sidebar.Button>
}
