/* eslint-disable react-hooks/rules-of-hooks */
import { Button, ToastProvider, ToastRootProps, useToast } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<ToastRootProps> = {
  title: 'Toast/useToast',
  decorators: [
    (Story) => (
      <ToastProvider posX={'right'} posY={'bottom'}>
        <Story />
      </ToastProvider>
    ),
  ],
  argTypes: {
    desc: {
      control: 'text',
      description: 'Define a descrição do toast.',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: true },
    },
    title: {
      control: 'text',
      description: 'Define o título do toast.',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: true },
    },
  },
  args: {
    desc: 'Descrição do toast',
    title: 'Título do toast',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3107-17113&t=F4jFiS042bjLT7s3-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type ToastStory = StoryObj<ToastRootProps>

export const Alert: ToastStory = {
  name: 'toast.alert',
  render: (args) => {
    const { toast } = useToast()

    return (
      <Button.Root onClick={() => toast.alert(args)}>Abrir toast</Button.Root>
    )
  },
}

export const Error: ToastStory = {
  name: 'toast.error',
  render: (args) => {
    const { toast } = useToast()

    return (
      <Button.Root onClick={() => toast.error(args)}>Abrir toast</Button.Root>
    )
  },
}

export const Success: ToastStory = {
  name: 'toast.success',
  render: (args) => {
    const { toast } = useToast()

    return (
      <Button.Root onClick={() => toast.success(args)}>Abrir toast</Button.Root>
    )
  },
}
