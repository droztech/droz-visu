import type { Meta, StoryObj } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import { Avatar, AvatarImageProps } from '@coaktion/visu'

const meta: Meta<AvatarImageProps> = {
  title: 'Avatar/Image',
  component: Avatar.Image,
  decorators: [withDesign],
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3107-17807&t=i2mg4ixu1iYnYf6w-0',
      allowFullscreen: true,
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
