import { Icon, IconProps } from '@coaktion/visu'
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
    disabled: {
      control: 'boolean',
      description: 'Aplica o disabled em Icon',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
    size: {
      control: 'inline-radio',
      description: 'Aplica o size em Icon',
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
    size: 'md',
    disabled: false,
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
