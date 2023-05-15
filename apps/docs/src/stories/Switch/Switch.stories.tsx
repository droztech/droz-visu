import { Meta, StoryObj } from '@storybook/react'

import { Switch, SwitchProps } from '@coaktion/visu'

const meta: Meta<SwitchProps> = {
  title: 'Switch/Switch',
  component: Switch,
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
    checked: {
      control: 'boolean',
      description: 'Propriedade que define se o valor está verificado.',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Define o valor inicial do componente.',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
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
    required: {
      control: { type: 'boolean' },
      description:
        'Define se é obrigatório verificar antes de submeter em um formulário.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    onCheckedChange: {
      action: 'change',
      description: 'Evento de mudança de valor.',
      table: { type: { summary: 'function' } },
    },
  },
  args: {
    asChild: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3107-18282&t=F4jFiS042bjLT7s3-0',
      allowFullscreen: true,
    },
  },
} as Meta<SwitchProps>

export default meta
type SwitchStory = StoryObj<SwitchProps>

export const Comum: SwitchStory = {
  render: (args) => {
    return <Switch {...args}></Switch>
  },
}
