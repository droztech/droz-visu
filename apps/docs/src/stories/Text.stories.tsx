import { Meta, StoryObj } from '@storybook/react'

import { Text, TextRootProps } from '@coaktion/visu'

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: {
      control: { type: 'text' },
      defaultValue: 'Hello World',
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      control: {
        type: 'inline-radio',
      },
      defaultValue: 'md',
    },
    as: {
      control: { type: 'text' },
    },
    color: {
      options: [
        'gray100',
        'gray400',
        'gray900',
        'primary400',
        'secondary400',
        'success400',
        'error400',
        'alert400',
      ],
      control: {
        type: 'select',
      },
      defaultValue: 'gray900',
    },
    link: {
      options: ['primary', 'secondary', 'success', 'error', 'alert'],
      control: {
        type: 'select',
      },
    },
    underline: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<TextRootProps>

export const Default: StoryObj<TextRootProps> = {}
