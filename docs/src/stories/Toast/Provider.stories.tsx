/* eslint-disable react-hooks/rules-of-hooks */
import {
  Button,
  ToastProvider,
  ToastProviderProps,
  useToast,
} from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<ToastProviderProps> = {
  title: 'Toast/Provider',
  component: ToastProvider,
  decorators: [
    (Story) => (
      <ToastProvider posX={'right'} posY={'bottom'}>
        <Story />
      </ToastProvider>
    ),
  ],
  argTypes: {
    children: {
      control: 'none',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    posX: {
      control: 'none',
      description: 'Define a posição do componente no eixo X.',
      options: ['left', 'right'],
      table: {
        type: {
          summary: ['left', 'right'].join('|'),
        },
      },
      type: { name: 'string', required: true },
    },
    posY: {
      control: 'none',
      description: 'Define a posição do componente no eixo Y.',
      options: ['bottom', 'top'],
      table: {
        type: {
          summary: ['bottom', 'top'].join('|'),
        },
      },
      type: { name: 'string', required: true },
    },
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
type ToastStory = StoryObj<ToastProviderProps>

export const Comum: ToastStory = {
  render: (args) => {
    const { toast } = useToast()

    return (
      <Button
        onClick={() =>
          toast.success({
            desc: 'Descrição do toast',
            title: 'Título do toast',
          })
        }
        {...args}
      >
        Abrir toast
      </Button>
    )
  },
}
