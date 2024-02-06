import { Menu, MenuHeaderProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<MenuHeaderProps> = {
  title: 'Menu/Header',
  component: Menu.Header,
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
} as Meta<MenuHeaderProps>

export default meta
type StoryMenuHeaderProps = StoryObj<MenuHeaderProps>

export const Comum: StoryMenuHeaderProps = {
  render: (args) => {
    return (
      <Menu.Header {...args} className="flex w-96 items-center justify-between">
        <h1>Nexo</h1>
      </Menu.Header>
    )
  },
}
