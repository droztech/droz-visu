import { Menu, MenuBodyProps } from '@droz-js/visu'
import { House } from '@phosphor-icons/react'
import { Meta, StoryObj } from '@storybook/react'

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
