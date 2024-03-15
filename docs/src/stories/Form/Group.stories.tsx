import { Form, FormGroupProps, Input } from '@droz-js/visu'
import { Password, Warning } from '@phosphor-icons/react'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<FormGroupProps> = {
  title: 'Form/Group',
  component: Form.Group,
  argTypes: {
    children: {
      control: 'none',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      type: { name: 'other', required: false, value: 'React.ReactNode' },
    },
  },
  args: {
    children: '',
  },
} as Meta<FormGroupProps>

export default meta
type FormGroupStory = StoryObj<FormGroupProps>

export const Comum: FormGroupStory = {
  render: (args) => {
    return (
      <Form.Root>
        <Form.Group {...args}>
          <Form.Label tooltip="Tooltip message">
            <Password />
            Password
          </Form.Label>
          {/* === children === */}
          <Input.Root>
            <Input.Input type="password" placeholder="Digite aqui..." />
          </Input.Root>
          {/* === children === */}
          <Form.Message status="alert">
            <Warning /> Warning message
          </Form.Message>
        </Form.Group>
      </Form.Root>
    )
  },
}
