import { Meta, StoryObj } from '@storybook/react'
import { House } from 'phosphor-react'

import { Flex, Sidebar, SidebarButtonProps } from '@droz-js/visu'

const meta: Meta<SidebarButtonProps> = {
  title: 'Sidebar/Button',
  component: Sidebar.Button,
  argTypes: {
    icon: {
      control: 'none',
      description: 'Propriedade que recebe o ícone do botão.',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      type: { name: 'function', required: true },
    },
    text: {
      control: 'text',
      description: 'Propriedade que recebe o texto do botão.',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: 'Home' },
      },
      type: { name: 'string', required: true },
    },
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
type SidebarButtonStory = StoryObj<SidebarButtonProps>

export const Comum: SidebarButtonStory = {
  args: {
    icon: <House />,
    text: 'Home',
  },
  render: (args) => {
    return (
      <Flex.Root style={{ width: '500px', border: '1px dashed blue' }}>
        <Sidebar.Root expanded style={{ border: '1px dashed red' }}>
          <Sidebar.Button {...args}></Sidebar.Button>
        </Sidebar.Root>
      </Flex.Root>
    )
  },
}

export const Comprimido: SidebarButtonStory = {
  name: 'Com menu comprimido',
  args: {
    icon: <House />,
    text: 'Home',
  },
  render: (args) => {
    return (
      <Flex.Root style={{ width: '500px', border: '1px dashed blue' }}>
        <Sidebar.Root expanded={false} style={{ border: '1px dashed red' }}>
          <Sidebar.Button {...args}></Sidebar.Button>
        </Sidebar.Root>
      </Flex.Root>
    )
  },
}
