import { Meta, StoryObj } from '@storybook/react'
import { X } from 'phosphor-react'

import { Button, Sidebar, SidebarHeaderProps } from '@droz-js/visu'

const meta: Meta<SidebarHeaderProps> = {
  title: 'Sidebar/Header',
  component: Sidebar.Header,
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
} as Meta<SidebarHeaderProps>

export default meta
type StorySidebarHeaderProps = StoryObj<SidebarHeaderProps>

export const Comum: StorySidebarHeaderProps = {
  render: (args) => {
    return (
      <Sidebar.Header
        {...args}
        className="flex justify-between items-center w-96"
      >
        <h1>Nexo</h1>
        <Button.Root light>
          <Button.Icon>
            <X />
          </Button.Icon>
        </Button.Root>
      </Sidebar.Header>
    )
  },
}
