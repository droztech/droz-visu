import { ComponentStory, Meta } from '@storybook/react'

import { OTPInput, OTPInputProps } from '@coaktion/visu'

export default {
  title: 'OTPInput/OTPInput',
  component: OTPInput,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    error: {
      control: 'boolean',
      description: 'Aplica o error em OTPInputOTPInput',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
    count: {
      control: 'number',
      description: 'Aplica o count em OTPInputOTPInput',
      table: {
        type: { summary: 'number' },
      },
      type: { name: 'number', required: true },
      defaultValue: 5 as OTPInputProps['count'],
    },
  },
  args: {
    children: '',
  },
} as Meta<OTPInputProps>

export const Comum: ComponentStory<typeof OTPInput> = (args) => {
  return <OTPInput {...args} />
}
