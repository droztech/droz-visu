import { Avatar, AvatarFallbackProps } from '@coaktion/visu'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<AvatarFallbackProps> = {
  title: 'Avatar/Fallback',
  component: Avatar.Fallback,
  argTypes: {
    fallback: {
      control: 'text',
      description:
        'Texto a ser exibido no lugar da imagem. Deve ser limitado a 2 caracteres.',
      table: {
        type: {
          summary: 'string',
        },
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
type AvatarFallbackStory = StoryObj<AvatarFallbackProps>

export const Comum: AvatarFallbackStory = {
  render: ({ fallback = 'DZ', ...args }) => {
    return (
      <Avatar.Root>
        <Avatar.Fallback fallback={fallback} {...args} />
      </Avatar.Root>
    )
  },
}
