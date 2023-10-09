import { Tabs, TabsRootProps } from '@droz-js/visu'
import type { Meta, StoryObj } from '@storybook/react'
import { Airplane, Alarm, Alien } from 'phosphor-react'

const meta: Meta<TabsRootProps> = {
  title: 'Tabs/Root',
  component: Tabs.Root,
  argTypes: {
    children: {
      control: 'none',
      description:
        'Conteúdos de cada aba, `Tabs.Content`, identificados pela propriedade `value` que deve ser semelhante ao `value` do `Tabs.Trigger`.',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      type: { name: 'string', required: true },
    },
    defaultValue: {
      control: 'text',
      description:
        'Valor da aba que será exibida por padrão. Utilize quando não precisar controlar o estado do componente.',
      table: {
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: false },
    },
    dir: {
      control: 'inline-radio',
      description: 'Define a direção do componente.',
      options: ['ltr', 'rtl'] as TabsRootProps['dir'][],
      table: {
        type: {
          summary: ['ltr', 'rtl'].join('|'),
        },
        defaultValue: { summary: 'ltr' },
      },
      type: { name: 'string', required: false },
    },
    triggers: {
      control: 'none',
      description:
        'Triggers de cada aba, `Tabs.Trigger`, devem conter a propriedade `value` para identificar o conteúdo a ser exibido.',
      table: {
        type: {
          summary: 'React.ReactNode[]',
        },
      },
      type: { name: 'string', required: true },
    },
    value: {
      control: 'text',
      description:
        'Valor da aba que será exibida. Utilize quando precisar controlar o estado do componente.',
      table: {
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: false },
    },

    onValueChange: {
      control: 'none',
      description:
        'Função que será executada quando o valor da aba for alterado. Recebe o valor da aba como parâmetro.',
      table: {
        type: {
          summary: 'function (value: string) => void',
        },
      },
      type: { name: 'function', required: false },
    },
  },
  args: {
    children: '',
    triggers: [],
    defaultValue: undefined,
    dir: 'ltr',
    value: undefined,
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
type TabsRootStory = StoryObj<TabsRootProps>

export const Comum: TabsRootStory = {
  args: {
    children: (
      <>
        <Tabs.Content value="tab1">
          <div>
            Conteúdo Avião <Airplane />
          </div>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <div>
            Conteúdo Alarme <Alarm />
          </div>
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <div>
            Conteúdo Alien <Alien />
          </div>
        </Tabs.Content>
      </>
    ),
    triggers: [
      <Tabs.Trigger
        icon={<Airplane />}
        key="tab1"
        title="Avião"
        value="tab1"
      />,
      <Tabs.Trigger icon={<Alarm />} key="tab2" title="Alarme" value="tab2" />,
      <Tabs.Trigger icon={<Alien />} key="tab3" title="Alien" value="tab3" />,
    ],
    defaultValue: 'tab1',
  },
  render: (args) => <Tabs.Root style={{ width: '80vw' }} {...args}></Tabs.Root>,
}
