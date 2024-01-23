import { Meta, StoryObj } from '@storybook/react'

import { Menu, MenuHeaderProps } from '@droz-js/visu'

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
      <Menu.Header {...args} className="flex justify-between items-center w-96">
        <h1>Nexo</h1>
      </Menu.Header>
    )
  },
}
