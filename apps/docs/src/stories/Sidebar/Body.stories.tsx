import { Meta, StoryObj } from '@storybook/react'
import { House } from 'phosphor-react'

import { Sidebar, SidebarBodyProps } from '@coaktion/visu'

const meta: Meta<SidebarBodyProps> = {
  title: 'Sidebar/Body',
  component: Sidebar.Body,
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
} as Meta<SidebarBodyProps>

export default meta
type StorySidebarBodyProps = StoryObj<SidebarBodyProps>

export const Comum: StorySidebarBodyProps = {
  render: (args) => {
    return (
      <Sidebar.Body {...args}>
        <Sidebar.Group>
          <Sidebar.Button text="Home" icon={<House />} />
          <Sidebar.Button text="Home" icon={<House />} />
        </Sidebar.Group>
      </Sidebar.Body>
    )
  },
}
