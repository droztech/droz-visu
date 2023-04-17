import { ComponentStory, Meta } from '@storybook/react'

import { ToastProvider, ToastProviderProps } from '@coaktion/visu'

export default {
  title: 'Toast/Toast',
  component: ToastProvider,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    posX: {
      control: 'inline-radio',
      description: 'Aplica o posX em ToastToast',
      options: ['left', 'right'],
      table: {
        type: {
          summary: ['left', 'right'].join('|'),
        },
      },
      type: { name: 'string', required: true },
    },
    posY: {
      control: 'inline-radio',
      description: 'Aplica o posY em ToastToast',
      options: ['top', 'bottom'],
      table: {
        type: {
          summary: ['top', 'bottom'].join('|'),
        },
      },
      type: { name: 'string', required: true },
    },
  },
  args: {
    children: '',
  },
} as Meta<ToastProviderProps>

export const Comum: ComponentStory<typeof ToastProvider> = (args) => {
  return (
    <ToastProvider {...args}>
      <div>Toast</div>
    </ToastProvider>
  )
}
