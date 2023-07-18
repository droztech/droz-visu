import { Meta, StoryObj } from '@storybook/react'
import { House } from 'phosphor-react'

import { Menu, MenuButtonProps } from '@coaktion/visu'

const meta: Meta<MenuButtonProps> = {
  title: 'Menu/Button',
  component: Menu.Button,
  argTypes: {
    children: {
      control: 'none',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    icon: {
      description:
        'Propriedade que recebe o ícone a ser exibido no componente.',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      type: { name: 'function', required: true },
    },
    text: {
      control: 'text',
      description:
        'Propriedade que recebe o texto a ser exibido no componente.',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: true },
    },
  },
  args: {
    children: '',
    icon: <></>,
    text: '',
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
type MenuButtonStory = StoryObj<MenuButtonProps>

export const Comum: MenuButtonStory = {
  render: ({ icon, text, ...args }) => {
    return (
      <Menu.Root
        expanded
        style={{
          position: 'unset',
          width: '300px',
          border: '1px dashed red',
        }}
      >
        <span style={{ marginBottom: '20px' }}>Menu</span>
        <Menu.Button icon={<House />} text="Botão Home" {...args}></Menu.Button>
      </Menu.Root>
    )
  },
}
