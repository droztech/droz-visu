import { Meta, StoryObj } from '@storybook/react'

import { Menu, MenuGroupProps } from '@droz-js/visu'

const meta: Meta<MenuGroupProps> = {
  title: 'Menu/Group',
  component: Menu.Group,
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
      url: 'https://www.figma.com/file/vimM8ueWbwKbUB2F4anWLS/%5BDroz-Nexo%5D-Telas?type=design&node-id=3295-23409&t=L7rzcV7ijjLp260X-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type MenuGroupStory = StoryObj<MenuGroupProps>

export const Comum: MenuGroupStory = {
  render: (args) => {
    return (
      <Menu.Root
        expanded
        style={{
          position: 'unset',
          width: '300px',
          border: '1px dashed red',
        }}
      >
        Menu
        <Menu.Group
          {...args}
          style={{
            width: '100%',
            height: '60px',
            border: '1px dashed green',
          }}
        >
          Grupo 1
        </Menu.Group>
        <Menu.Group
          {...args}
          style={{
            width: '100%',
            height: '60px',
            border: '1px dashed blue',
          }}
        >
          Grupo 2
        </Menu.Group>
        <Menu.Group
          {...args}
          style={{
            width: '100%',
            height: '60px',
            border: '1px dashed orange',
          }}
        >
          Grupo 3
        </Menu.Group>
      </Menu.Root>
    )
  },
}
