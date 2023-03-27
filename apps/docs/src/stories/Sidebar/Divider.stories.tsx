import { ComponentStory, Meta } from '@storybook/react'

import { Sidebar, SidebarDividerProps } from '@coaktion/visu'

export default {
  title: 'Sidebar/Divider',
  component: Sidebar.Divider,
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
} as Meta<SidebarDividerProps>

const Template: ComponentStory<typeof Sidebar.Divider> = (args) => {
  return (
    <div style={{ width: '240px' }}>
      <Sidebar.Divider {...args}></Sidebar.Divider>
    </div>
  )
}

export const Comum = Template.bind({})
