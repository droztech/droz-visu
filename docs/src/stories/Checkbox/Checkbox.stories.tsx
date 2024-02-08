import { Checkbox, CheckboxProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'
import { Question } from 'phosphor-react'

const meta: Meta<CheckboxProps> = {
  title: 'Checkbox/Checkbox',
  component: Checkbox,
  argTypes: {
    children: {
      control: 'none',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    value: {
      control: { type: 'inline-radio' },
      description:
        'Propriedade que indica se o componente está marcado, não está marcado ou está indeterminado.',
      options: [true, false, 'indeterminate'],
      table: {
        type: { summary: ['boolean', '"indeterminate"'].join(' | ') },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    color: {
      control: 'inline-radio',
      description: 'Define a cor do componente.',
      options: ['primary', 'secondary'] as CheckboxProps['color'][],
      table: {
        type: {
          summary: ['primary', 'secondary'].join('|'),
        },
        defaultValue: { summary: 'primary' },
      },
      type: { name: 'string', required: false },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilita o componente.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    onChange: {
      action: 'clicked',
      description: 'Evento de modificação do valor do componente.',
      table: { type: { summary: 'function' } },
    },
  },
  args: {
    color: 'primary',
    disabled: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3107-18146&t=i2mg4ixu1iYnYf6w-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type CheckboxStory = StoryObj<CheckboxProps>

export const Comum: CheckboxStory = {
  render: (args) => {
    return <Checkbox {...args} />
  },
}

export const Indeterminado: CheckboxStory = {
  render: (args) => {
    return (
      <Checkbox {...args}>
        <Question />
      </Checkbox>
    )
  },
}
