import { Avatar, AvatarProps } from '@droz-js/visu'
import { User } from 'phosphor-react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<AvatarProps> = {
  title: 'Avatar/Avatar',
  component: Avatar,
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
      options: ['primary', 'secondary'] as AvatarProps['color'][],
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
      options: ['lg', 'md', 'sm'] as AvatarProps['size'][],
      table: {
        type: {
          summary: ['lg', 'md', 'sm'].join('|'),
        },
        defaultValue: { summary: 'md' },
      },
      type: { name: 'string', required: false },
    },
    src: {
      control: 'text',
      description: 'Aplica o src em AvatarAvatar',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: true },
    },
    alt: {
      control: 'text',
      description: 'Aplica o alt em AvatarAvatar',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: true },
    },
    fallback: {
      control: 'text',
      description: 'Aplica o fallback em AvatarAvatar',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: false },
    },
    status: {
      control: 'select',
      description: 'Define a badge de status do componente.',
      options: ['', 'error', 'none', 'success'] as AvatarProps['status'][],
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
    status: undefined,
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
type AvatarStory = StoryObj<AvatarProps>

export const Comum: AvatarStory = {
  render: (args) => <Avatar {...args}></Avatar>,
}

export const ComImagem: AvatarStory = {
  render: (args) => {
    return <Avatar {...args} src="/vite.svg" alt="" />
  },
}

export const ComFallback: AvatarStory = {
  render: (args) => {
    return <Avatar {...args} src="/vite.svg" alt="" fallback="DZ" />
  },
}

export const ComFallbackIcon: AvatarStory = {
  render: (args) => {
    return <Avatar {...args} src="/vite.svg" alt="" fallback={<User />} />
  },
}
