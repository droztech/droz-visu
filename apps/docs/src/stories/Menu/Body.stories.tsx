import { Meta, StoryObj } from '@storybook/react'
import { House } from 'phosphor-react'

import { Menu, MenuBodyProps } from '@coaktion/visu'

const meta: Meta<MenuBodyProps> = {
  title: 'Menu/Body',
  component: Menu.Body,
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
} as Meta<MenuBodyProps>

export default meta
type StoryMenuBodyProps = StoryObj<MenuBodyProps>

export const Comum: StoryMenuBodyProps = {
  render: (args) => {
    return (
      <Menu.Body {...args}>
        <Menu.Group>
          <Menu.Button text="Home" icon={<House />} />
          <Menu.Button text="Home" icon={<House />} />
        </Menu.Group>
      </Menu.Body>
    )
  },
}
