import { Avatar, AvatarRootProps } from '@droz-js/visu'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<AvatarRootProps> = {
  title: 'Avatar/Root',
  component: Avatar.Root,
  argTypes: {
    children: {
      control: 'none',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    color: {
      control: 'inline-radio',
      description: 'Define a cor do Componente.',
      options: ['primary', 'secondary'] as AvatarRootProps['color'][],
      table: {
        type: {
          summary: ['primary', 'secondary'].join('|'),
        },
        defaultValue: { summary: 'primary' },
      },
      type: { name: 'string', required: false },
    },
    size: {
      control: 'inline-radio',
      description: 'Define o tamanho do componente.',
      options: ['lg', 'md', 'sm'] as AvatarRootProps['size'][],
      table: {
        type: {
          summary: ['lg', 'md', 'sm'].join('|'),
        },
        defaultValue: { summary: 'md' },
      },
      type: { name: 'string', required: false },
    },
    status: {
      control: 'select',
      description: 'Define a badge de status do componente.',
      options: ['', 'error', 'none', 'success'] as AvatarRootProps['status'][],
      table: {
        type: {
          summary: ['error', 'none', 'success'].join('|'),
        },
      },
      type: { name: 'string', required: false },
    },
  },
  args: {
    children: '',
    color: 'primary',
    size: 'md',
    status: '',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3107-17807&t=i2mg4ixu1iYnYf6w-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type AvatarRootStory = StoryObj<AvatarRootProps>

export const Comum: AvatarRootStory = {
  render: (args) => <Avatar.Root {...args}></Avatar.Root>,
}

export const ComImagem: AvatarRootStory = {
  render: (args) => {
    return (
      <Avatar.Root {...args}>
        <Avatar.Image src="/vite.svg" />
      </Avatar.Root>
    )
  },
}

export const ComFallback: AvatarRootStory = {
  render: (args) => {
    return (
      <Avatar.Root {...args}>
        <Avatar.Fallback fallback="DZ" />
      </Avatar.Root>
    )
  },
}
