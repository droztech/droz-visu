import { Meta, StoryObj } from '@storybook/react'

import { Menu, MenuRootProps } from '@droz-js/visu'

const meta: Meta<MenuRootProps> = {
  title: 'Menu/Root',
  component: Menu.Root,
  argTypes: {
    children: {
      control: 'none',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    expanded: {
      control: { type: 'boolean' },
      description: 'Define se o menu está encolhido ou expandido.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    children: '',
    expanded: false,
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
type MenuRootStory = StoryObj<MenuRootProps>

export const Comum: MenuRootStory = {
  render: (args) => {
    return (
      <div style={{ width: '300px', border: '1px dashed blue' }}>
        <Menu.Root
          {...args}
          style={{
            position: 'unset',
            width: '200px',
            border: '1px dashed red',
          }}
        >
          <span style={{ color: 'black' }}>Menu.Root</span>
        </Menu.Root>
      </div>
    )
  },
}
