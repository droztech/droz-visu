import { ComponentStory, Meta } from '@storybook/react'

import { Avatar, AvatarProps } from '@coaktion/visu'

export default {
  title: 'Avatar/Avatar',
  component: Avatar,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    url: {
      control: 'text',
      description: 'Aplica o url em Avatar',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: true },
      defaultValue: 'https://picsum.photos/200/200',
    },
    fallback: {
      control: 'text',
      description: 'Aplica o fallback em Avatar',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: true },
      defaultValue: 'CO',
    },
    color: {
      control: 'inline-radio',
      description: 'Aplica o color em Avatar',
      options: ['primary', 'secondary'] as AvatarProps['color'][],
      table: {
        type: {
          summary: ['primary', 'secondary'].join('|'),
        },
      },
      type: { name: 'string', required: false },
      defaultValue: 'primary' as AvatarProps['color'],
    },
    size: {
      control: 'inline-radio',
      description: 'Aplica o size em Avatar',
      options: ['sm', 'md', 'lg'] as AvatarProps['size'][],
      table: {
        type: {
          summary: ['sm', 'md', 'lg'].join('|'),
        },
      },
      type: { name: 'string', required: false },
      defaultValue: 'md' as AvatarProps['size'],
    },
    status: {
      control: 'inline-radio',
      description: 'Aplica o status em Avatar',
      options: ['error', 'success', 'none'] as AvatarProps['status'][],
      table: {
        type: {
          summary: ['error', 'success', 'none'].join('|'),
        },
      },
      type: { name: 'string', required: false },
      defaultValue: 'none' as AvatarProps['status'],
    },
  },
  args: {
    children: '',
  },
} as Meta<AvatarProps>

export const Comum: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar {...args} />
}

export const ImageError: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar {...args} url="" />
}
