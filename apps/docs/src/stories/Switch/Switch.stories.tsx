import { Switch, SwitchProps } from '@coaktion/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<SwitchProps> = {
  title: 'Switch/Switch',
  component: Switch,
  argTypes: {
    value: {
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
    onChange: {
      control: 'none',
      action: 'change',
      description: 'Evento de mudança de valor.',
      table: { type: { summary: 'function' } },
    },
    label: {
      control: 'boolean',
      description: 'Aplica o label em SwitchSwitch',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },

    /**
     * @deprecated - Deprecated props will be removed in the next major version.
     */
    checked: {
      control: 'boolean',
      name: 'checked (deprecated)',
      description:
        '<s>Propriedade que define se o valor está verificado.</s> (deprecated) - Use a propriedade `value`.',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
    onCheckedChange: {
      control: 'none',
      action: 'change',
      name: 'onCheckedChange (deprecated)',
      description:
        '<s>Evento de mudança de valor.</s> <br> (deprecated) - Use o método `onChange`.',
      table: { type: { summary: 'function' } },
    },
  },
  args: {
    defaultChecked: false,
    disabled: false,
    label: false,
    required: false,
    value: undefined,
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
