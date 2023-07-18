import { Meta, StoryObj } from '@storybook/react'

import { Flex, Sidebar, SidebarGroupProps } from '@coaktion/visu'

const meta: Meta<SidebarGroupProps> = {
  title: 'Sidebar/Group',
  component: Sidebar.Group,
  argTypes: {
    children: {
      control: 'none',
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3107-17418&t=F4jFiS042bjLT7s3-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type SidebarGroupStory = StoryObj<SidebarGroupProps>

export const Comum: SidebarGroupStory = {
  render: (args) => {
    return (
      <Flex.Root style={{ width: '500px', border: '1px dashed blue' }}>
        <Sidebar.Root expanded style={{ border: '1px dashed red' }}>
          <Sidebar.Group
            {...args}
            style={{
              width: '100%',
              border: '1px dashed green',
            }}
          >
            Grupo 1
          </Sidebar.Group>
          <Sidebar.Group
            {...args}
            style={{
              width: '100%',
              border: '1px dashed blue',
            }}
          >
            Grupo 2
          </Sidebar.Group>
          <Sidebar.Group
            {...args}
            style={{
              width: '100%',
              border: '1px dashed orange',
            }}
          >
            Grupo 3
          </Sidebar.Group>
        </Sidebar.Root>
      </Flex.Root>
    )
  },
}
