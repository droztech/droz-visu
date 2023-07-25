import { Tabs, TabsTriggerProps } from '@coaktion/visu'
import type { Meta, StoryObj } from '@storybook/react'
import { Image } from 'phosphor-react'

const meta: Meta<TabsTriggerProps> = {
  title: 'Tabs/Trigger',
  component: Tabs.Trigger,
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    icon: {
      control: 'none',
      description: 'Ícone do botão trigger.',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      type: { name: 'string', required: true },
    },
    title: {
      control: 'text',
      description: 'Título do botão trigger.',
      table: {
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: true },
    },
    value: {
      control: 'text',
      description:
        'Valor que representa o botão. Deve ser semelhante ao `value` do `Tabs.Content`, pois é esse valor que identifica o conteúdo a ser exibido para a aba.',
      table: {
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: true },
    },
  },
  args: {
    icon: undefined,
    title: '',
    value: '',
    disabled: false,
  },
}

export default meta
type TabsTriggerStory = StoryObj<TabsTriggerProps>

export const Comum: TabsTriggerStory = {
  args: {
    icon: <Image alt="Icone de exemplo" />,
    title: 'Trigger',
    value: 'trigger',
  },
  render: ({ title, value, ...args }) => (
    <Tabs.Root
      triggers={[
        <Tabs.Trigger
          key={value}
          title={[title, '1'].join('')}
          value={[value, '1'].join('')}
          {...args}
        />,
        <Tabs.Trigger
          key={value}
          title={[title, '2'].join('')}
          value={[value, '2'].join('')}
          {...args}
        />,
      ]}
      style={{ width: '50vw' }}
    >
      <Tabs.Content key={value} value={[value, '1'].join('')}>
        Tab 1 content
      </Tabs.Content>
      <Tabs.Content key={value} value={[value, '2'].join('')}>
        Tab 2 content
      </Tabs.Content>
    </Tabs.Root>
  ),
}

export const Desabilitado: TabsTriggerStory = {
  args: {
    disabled: true,
    icon: <Image alt="Icone de exemplo" />,
    title: 'Trigger',
    value: 'trigger',
  },
  render: ({ title, value, ...args }) => (
    <Tabs.Root
      triggers={[
        <Tabs.Trigger
          key={value}
          title={[title, '1'].join('')}
          value={[value, '1'].join('')}
          {...args}
        />,
        <Tabs.Trigger
          key={value}
          title={[title, '2'].join('')}
          value={[value, '2'].join('')}
          {...args}
        />,
      ]}
      style={{ width: '50vw' }}
    >
      <Tabs.Content key={value} value={[value, '1'].join('')}>
        Tab 1 content
      </Tabs.Content>
      <Tabs.Content key={value} value={[value, '2'].join('')}>
        Tab 2 content
      </Tabs.Content>
    </Tabs.Root>
  ),
}
