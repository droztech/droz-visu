import { Tabs, TabsContentProps } from '@coaktion/visu'
import type { Meta, StoryObj } from '@storybook/react'
import { Image } from 'phosphor-react'

const meta: Meta<TabsContentProps> = {
  title: 'Tabs/Content',
  component: Tabs.Content,
  argTypes: {
    children: {
      control: 'none',
      description:
        'Conteúdo da aba. Deve ser identificado pela propriedade `value` que deve ser semelhante ao `value` do `Tabs.Trigger`.',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      type: { name: 'string', required: true },
    },
    value: {
      control: 'none',
      description:
        'Valor que representa o conteúdo da aba. Deve ser semelhante ao `value` do `Tabs.Trigger` correspondente.',
      table: {
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: true },
    },
  },
  args: {
    children: undefined,
    value: '',
  },
}

export default meta
type TabsContentStory = StoryObj<TabsContentProps>

export const Comum: TabsContentStory = {
  args: {
    value: 'tab',
  },
  render: ({ value, ...args }) => (
    <Tabs.Root
      triggers={[
        <Tabs.Trigger
          key={'tab1'}
          icon={<Image alt="Icone de exemplo" />}
          title="Trigger1"
          value="tab1"
        />,
        <Tabs.Trigger
          key={'tab2'}
          icon={<Image alt="Icone de exemplo" />}
          title="Trigger2"
          value="tab2"
        />,
      ]}
      style={{ width: '50vw' }}
    >
      <Tabs.Content value={[value, '1'].join('')} {...args}>
        Conteúdo do Content 1
      </Tabs.Content>
      <Tabs.Content value={[value, '2'].join('')} {...args}>
        Conteúdo do Content 2
      </Tabs.Content>
    </Tabs.Root>
  ),
}
