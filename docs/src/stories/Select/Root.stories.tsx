import { Select, SelectRootProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<SelectRootProps> = {
  title: 'Select/Root',
  component: Select.Root,
  argTypes: {
    children: {
      control: 'none',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    align: {
      control: 'inline-radio',
      description: 'Define o alinhamento do conteúdo em relação ao trigger.',
      options: ['center', 'end', 'start'] as SelectRootProps['align'][],
      table: {
        type: {
          summary: ['center', 'end', 'start'].join('|'),
        },
        defaultValue: { summary: 'center' },
      },
      type: { name: 'string', required: false },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o componente.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    full: {
      control: 'boolean',
      description:
        'Faz com que o componente preencha todo o espaço disponível.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    placeholder: {
      control: 'text',
      description: 'Define o placeholder do componente.',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: false },
    },
    enableSearch: {
      control: 'boolean',
      description: 'Habilkita o search dentro do select.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Define o placeholder do search dentro do componente.',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: false },
    },
    position: {
      control: 'inline-radio',
      description:
        'Define a posição em que o conteúdo irá abrir. O valor defaul `item-aligned` abre o conteúdo relativo ao trigger. O valor `popper` irá abrir o conteúdo logo abaixo do trigger.',
      options: ['item-aligned', 'popper'] as SelectRootProps['position'][],
      table: {
        type: {
          summary: ['item-aligned', 'popper'].join('|'),
        },
        defaultValue: { summary: 'popper' },
      },
      type: { name: 'string', required: false },
    },
    value: {
      control: 'text',
      description: 'Valor atual do componente.',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: false },
      defaultValue: '',
    },
    status: {
      control: 'inline-radio',
      description: 'Aplica o status em SelectRoot',
      options: ['error', 'success'] as SelectRootProps['status'][],
      table: {
        type: {
          summary: ['error', 'success'].join('|'),
        },
      },
      type: { name: 'string', required: false },
    },
  },
  args: {
    children: '',
    align: 'center',
    disabled: false,
    full: false,
    placeholder: 'Selecione um item',
    position: 'popper',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3108-16362&t=gSZqfhVYy3KRKNHz-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type SelectRootStory = StoryObj<SelectRootProps>

export const Comum: SelectRootStory = {
  render: (args) => {
    return (
      <div className="flex w-[80vw] items-center justify-center">
        <Select.Root {...args}>
          <Select.Item value="item1">Item 1</Select.Item>
          <Select.Item value="item2">Item 2</Select.Item>
        </Select.Root>
      </div>
    )
  },
}
