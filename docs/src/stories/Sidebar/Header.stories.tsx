import { Button, Sidebar, SidebarHeaderProps } from '@droz-js/visu'
import { X } from '@phosphor-icons/react'
import { Meta, StoryObj } from '@storybook/react'

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
        className="flex w-96 items-center justify-between"
      >
        <h1>Nexo</h1>
        <Button light>
          <X />
        </Button>
      </Sidebar.Header>
    )
  },
}
