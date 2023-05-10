import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarImageProps } from '@coaktion/visu'

const meta: Meta<AvatarImageProps> = {
  title: 'Avatar/Image',
  component: Avatar.Image,
  argTypes: {
    alt: {
      control: 'text',
      description: 'Define o alt da imagem exibida.',
      table: {
        type: { summary: 'string' },
      },
      type: { name: 'string', required: false },
    },
    src: {
      control: 'text',
      description: 'Define o src da imagem a ser exibida.',
      table: {
        type: { summary: 'string' },
      },
      type: { name: 'string', required: true },
    },
  },
}

export default meta
type AvatarImageStory = StoryObj<AvatarImageProps>

export const Comum: AvatarImageStory = {
  render: ({ alt = 'Avatar Vite', src = '/vite.svg', ...args }) => {
    return (
      <Avatar.Root>
        <Avatar.Image alt={alt} src={src} {...args} />
      </Avatar.Root>
    )
  },
}
