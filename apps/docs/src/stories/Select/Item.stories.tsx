import { Meta, StoryObj } from '@storybook/react'

import { Select, SelectItemProps } from '@coaktion/visu'

const meta: Meta<SelectItemProps> = {
  title: 'Select/Item',
  component: Select.Item,
  argTypes: {
    children: {
      control: 'none',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    asChild: {
      control: { type: 'boolean' },
      description:
        'Ao passar essa propriedade com o valor true, o componente irá se transformar no componente filho. É obrigatório passar um children ao utilizar essa propriedade. <b>Verifique a tag ao inspecionar o componente na DOM</b>.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    disabled: {
      control: 'none',
      description: 'Desabilita o item, impossibilitando a seleção do mesmo.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    value: {
      control: 'text',
      description: 'Define o valor do item.',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: true },
      defaultValue: '',
    },
  },
  args: {
    children: '',
    asChild: false,
    disabled: false,
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
type SelectItemStory = StoryObj<SelectItemProps>

export const Comum: SelectItemStory = {
  render: ({ value, ...args }) => {
    return (
      <Select.Root placeholder="Selecione um item">
        <Select.Item value="item1" {...args}>
          Item 1
        </Select.Item>
        <Select.Item value="item2" {...args}>
          Item 2
        </Select.Item>
      </Select.Root>
    )
  },
}

export const ComItemDesabilitado: SelectItemStory = {
  render: ({ disabled, value, ...args }) => {
    return (
      <Select.Root placeholder="Selecione um item">
        <Select.Item disabled={disabled} value="item1" {...args}>
          Item 1
        </Select.Item>
        <Select.Item disabled value="item2" {...args}>
          Item 2
        </Select.Item>
        <Select.Item disabled={disabled} value="item3" {...args}>
          Item 3
        </Select.Item>
      </Select.Root>
    )
  },
}
