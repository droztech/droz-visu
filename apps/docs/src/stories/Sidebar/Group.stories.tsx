import { ComponentStory, Meta } from '@storybook/react'

import { Sidebar, SidebarGroupProps } from '@coaktion/visu'

export default {
  title: 'Sidebar/Group',
  component: Sidebar.Group,
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
} as Meta<SidebarGroupProps>

const Template: ComponentStory<typeof Sidebar.Group> = (args) => {
  return (
    <Sidebar.Group {...args}>
      <div
        style={{ width: '240px', height: '60px', backgroundColor: 'red' }}
      ></div>
      <div
        style={{ width: '240px', height: '60px', backgroundColor: 'green' }}
      ></div>
      <div
        style={{ width: '240px', height: '60px', backgroundColor: 'blue' }}
      ></div>
    </Sidebar.Group>
  )
}

export const Comum = Template.bind({})
