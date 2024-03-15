import { Form, FormRootProps, Input } from '@droz-js/visu'
import { Password, Warning } from '@phosphor-icons/react'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<FormRootProps> = {
  title: 'Form/Root',
  component: Form.Root,
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
} as Meta<FormRootProps>

export default meta
type FormRootStory = StoryObj<FormRootProps>

export const Comum: FormRootStory = {
  render: (args) => {
    return (
      <Form.Root {...args}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          {/* === children === */}
          <Input.Root>
            <Input.Input placeholder="Digite aqui..." />
          </Input.Root>
          {/* === children === */}
          <Form.Message>Error message</Form.Message>
        </Form.Group>
        <Form.Group>
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
