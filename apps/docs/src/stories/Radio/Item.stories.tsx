import { Meta, StoryObj } from '@storybook/react'

import { Flex, Radio, RadioItemProps } from '@droz-js/visu'

const meta: Meta<RadioItemProps> = {
  title: 'Radio/Item',
  component: Radio.Item,
  argTypes: {
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
    color: {
      control: 'inline-radio',
      description: 'Aplica o color em RadioItem',
      options: ['primary', 'secondary'] as RadioItemProps['color'][],
      table: {
        type: {
          summary: ['primary', 'secondary'].join('|'),
        },
        defaultValue: { summary: 'primary' },
      },
      type: { name: 'string', required: false },
    },
    disabled: {
      control: 'boolean',
      description: 'Aplica o disabled em RadioItem',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
    required: {
      control: { type: 'boolean' },
      description:
        'Define se é obrigatório marcar o item antes de submeter em um formulário.',
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
        defaultValue: { summary: '' },
      },
      type: { name: 'string', required: true },
    },
  },
  args: {
    asChild: false,
    color: 'primary',
    disabled: false,
    required: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3107-18214&t=gSZqfhVYy3KRKNHz-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type RadioItemStory = StoryObj<RadioItemProps>

export const Comum: RadioItemStory = {
  render: ({ value, ...args }) => {
    return (
      <Radio.Root>
        <Flex.Row center>
          <Radio.Item id="item1" value="1" {...args} />
          <span>Item 1</span>
        </Flex.Row>
        <Flex.Row center>
          <Radio.Item id="item2" value="2" {...args} />
          <span>Item 2</span>
        </Flex.Row>
      </Radio.Root>
    )
  },
}
