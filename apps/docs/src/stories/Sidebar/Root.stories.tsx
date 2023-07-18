import { Meta, StoryObj } from '@storybook/react'

import { Flex, Sidebar, SidebarRootProps } from '@coaktion/visu'

const meta: Meta<SidebarRootProps> = {
  title: 'Sidebar/Root',
  component: Sidebar.Root,
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
      description:
        'Propriedade que define se o componente está expandido ou comprimido.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      type: { name: 'boolean', required: false },
    },
    setExpanded: {
      action: 'clicked',
      description:
        'Propriedade que representa o método executado ao clicar em expandir ou comprimir o componente. <b>Ao passar essa propriedade o botão de expandir ou comprimir é exibido, caso ela não seja enviada o botão não existirá</b>.',
      table: { type: { summary: 'function' } },
    },
  },
  args: {
    children: '',
    expanded: true,
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
type SidebarRoot = StoryObj<SidebarRootProps>

export const Comum: SidebarRoot = {
  render: (args) => {
    return (
      <Flex.Root style={{ width: '500px', border: '1px dashed blue' }}>
        <Sidebar.Root {...args} style={{ border: '1px dashed red' }}>
          Menu
        </Sidebar.Root>
      </Flex.Root>
    )
  },
}

export const Comprimido: SidebarRoot = {
  args: {
    expanded: false,
  },
  render: (args) => {
    return (
      <Flex.Root style={{ width: '500px', border: '1px dashed blue' }}>
        <Sidebar.Root {...args} style={{ border: '1px dashed red' }}>
          Menu
        </Sidebar.Root>
      </Flex.Root>
    )
  },
}

export const SemSetExpanded: SidebarRoot = {
  name: 'Sem opção de expandir',
  render: (args) => {
    delete args.setExpanded

    return (
      <Flex.Root style={{ width: '500px', border: '1px dashed blue' }}>
        <Sidebar.Root {...args} style={{ border: '1px dashed red' }}>
          Menu
        </Sidebar.Root>
      </Flex.Root>
    )
  },
}
