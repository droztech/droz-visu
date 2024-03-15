import { Form, FormLabelProps } from '@droz-js/visu'
import { Envelope } from '@phosphor-icons/react'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<FormLabelProps> = {
  title: 'Form/Label',
  component: Form.Label,
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
    tooltip: {
      control: 'text',
      description: 'Aplica o tooltip em FormLabel',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: false },
    },
  },
  args: {
    children: '',
  },
} as Meta<FormLabelProps>

export default meta
type FormLabelStory = StoryObj<FormLabelProps>

export const Comum: FormLabelStory = {
  render: (args) => {
    return <Form.Label {...args}>Email</Form.Label>
  },
}

export const ComIcone: FormLabelStory = {
  render: (args) => {
    return (
      <Form.Label {...args}>
        <Envelope />
        Password
      </Form.Label>
    )
  },
}
