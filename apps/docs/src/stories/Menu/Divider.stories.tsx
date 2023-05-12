import { Meta, StoryObj } from '@storybook/react'

import { Menu, MenuDividerProps } from '@coaktion/visu'

const meta: Meta<MenuDividerProps> = {
  title: 'Menu/Divider',
  component: Menu.Divider,
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
type MenuDividerStory = StoryObj<MenuDividerProps>

export const EntreGrupos: MenuDividerStory = {
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
        <Menu.Divider {...args} />
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
      </Menu.Root>
    )
  },
}

export const EntreElementos: MenuDividerStory = {
  name: 'Entre elementos do grupo',
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
            border: '1px dashed green',
          }}
        >
          <span>Grupo 1</span>
          <span>Elemento 1</span>
          <Menu.Divider {...args} />
          <span>Elemento 2</span>
        </Menu.Group>
      </Menu.Root>
    )
  },
}
