import { Tabs, TabsListProps } from '@droz-js/visu'
import { Image } from 'phosphor-react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<TabsListProps> = {
  title: 'Tabs/List',
  component: Tabs.List,
  argTypes: {
    children: {
      control: 'none',
      description: 'Lista de Triggers da aba.',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      type: { name: 'string', required: true },
    },
  },
  args: {
    children: undefined,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=4117-789&mode=design&t=GkCuiPciOuvVbU6h-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type TabsListStory = StoryObj<TabsListProps>

export const Comum: TabsListStory = {
  render: ({ ...args }) => (
    <Tabs.Root style={{ width: '50vw' }}>
      <Tabs.List>
        <Tabs.Trigger
          key={'tab1'}
          icon={<Image alt="Icone de exemplo" />}
          title="Trigger1"
          value="tab1"
        />
        <Tabs.Trigger
          key={'tab2'}
          icon={<Image alt="Icone de exemplo" />}
          title="Trigger2"
          value="tab2"
        />
      </Tabs.List>
      <Tabs.Content value={'tab1'} {...args}>
        Conteúdo do Content 1
      </Tabs.Content>
      <Tabs.Content value={'tab2'} {...args}>
        Conteúdo do Content 2
      </Tabs.Content>
    </Tabs.Root>
  ),
}
