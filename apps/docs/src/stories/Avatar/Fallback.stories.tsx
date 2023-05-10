import type { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarFallbackProps } from '@coaktion/visu'

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
