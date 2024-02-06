import { Radio, RadioRootProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<RadioRootProps> = {
  title: 'Radio/Root',
  component: Radio.Root,
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
    defaultValue: {
      control: 'text',
      description: 'Define o valor default do componente.',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
      type: { name: 'string', required: false },
    },
    disabled: {
      control: { type: 'boolean' },
      description:
        'Desabilita o componente, impedindo que o usuário consiga mudar o valor. Não possui efeitos visuais.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    loop: {
      control: { type: 'boolean' },
      description:
        'Define se a navegação pelo teclado voltará ao primeiro elemento após passar pelo último.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      type: { name: 'boolean', required: false },
    },
    orientation: {
      control: { type: 'inline-radio' },
      description: 'Define a orientação do componente.',
      options: ['horizontal', 'vertical', undefined],
      table: {
        type: {
          summary: ['horizontal', 'vertical', undefined].join('|'),
        },
        defaultValue: { summary: undefined },
      },
      type: { name: 'string', required: false },
    },
    required: {
      control: { type: 'boolean' },
      description:
        'Define se é obrigatório escolher um valor antes de submeter em um formulário.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    value: {
      control: 'text',
      description: 'Define o valor selecionado.',
      table: {
        type: { summary: 'text' },
        defaultValue: { summary: '' },
      },
      type: { name: 'string', required: true },
    },
    onValueChange: {
      action: 'change',
      description: 'Evento de mudança de valor.',
      table: { type: { summary: 'function' } },
    },
  },
  args: {
    children: '',
    asChild: false,
    defaultValue: '',
    disabled: false,
    loop: true,
    orientation: undefined,
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
type RadioRootStory = StoryObj<RadioRootProps>

export const Comum: RadioRootStory = {
  args: {
    defaultValue: '1',
  },
  render: (args) => {
    return (
      <Radio.Root {...args}>
        <div className="flex">
          <Radio.Item id="item1" value="1" />
          <span>Item 1</span>
        </div>
        <div className="flex">
          <Radio.Item id="item2" value="2" />
          <span>Item 2</span>
        </div>
      </Radio.Root>
    )
  },
}
