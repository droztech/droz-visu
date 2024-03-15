import { Form, FormMessageProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<FormMessageProps> = {
  title: 'Form/Message',
  component: Form.Message,
  argTypes: {
    children: {
      control: 'text',
      description: 'Aplica o  em FormMessage',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      type: { name: 'other', required: false, value: 'React.ReactNode' },
    },
    status: {
      control: 'inline-radio',
      description: 'Aplica o status em FormMessage',
      options: ['alert', 'error', 'success'] as FormMessageProps['status'][],
      table: {
        type: {
          summary: ['alert', 'error', 'success'].join('|'),
        },
      },
      type: { name: 'string', required: false },
      defaultValue: 'error' as FormMessageProps['status'],
    },
    isHidden: {
      control: 'boolean',
      description: 'Aplica o isHidden em FormMessage',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'string', required: true },
      defaultValue: false as FormMessageProps['isHidden'],
    },
  },
  args: {
    children: 'Erro message',
  },
} as Meta<FormMessageProps>

export default meta
type FormMessageStory = StoryObj<FormMessageProps>

export const Comum: FormMessageStory = {
  render: (args) => {
    return <Form.Message {...args}></Form.Message>
  },
}
