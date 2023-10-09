import { Icon, IconProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'
import { X } from 'phosphor-react'

const meta: Meta<IconProps> = {
  title: 'Icon/Icon',
  component: Icon,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    color: {
      control: 'select',
      description: 'Define a cor do componente.',
      options: ['primary', 'error'] as IconProps['color'][],
      table: {
        type: {
          summary: ['primary', 'error'].join('|'),
        },
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o componente.',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
    size: {
      control: 'inline-radio',
      description: 'Define o tamanho do componente',
      options: ['sm', 'md'] as IconProps['size'][],
      table: {
        type: {
          summary: ['sm', 'md'].join('|'),
        },
      },
      type: { name: 'string', required: false },
      defaultValue: 'md' as IconProps['size'],
    },
  },
  args: {
    children: '',
    color: 'primary',
    disabled: false,
    size: 'md',
  },
} as Meta<IconProps>

export default meta
type StoryIconProps = StoryObj<IconProps>

export const Comum: StoryIconProps = {
  render: (args) => {
    return (
      <Icon onClick={() => console.log('Click')} {...args}>
        <X />
      </Icon>
    )
  },
}
