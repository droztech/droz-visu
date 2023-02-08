import { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps, normalColors } from '@coaktion/visu'

export default {
  title: 'Text/Text',
  component: Text,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    size: {
      control: { type: 'inline-radio' },
      description: 'Define o tamanho da fonte',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      table: {
        type: {
          summary: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].join('|'),
        },
        defaultValue: { summary: 'md' },
      },
      type: { name: 'string', required: false },
    },
    color: {
      control: { type: 'text' },
      description:
        'Define a cor do texto, podendo ser uma das <b>NormalColors</b> ou uma string com uma cor qualquer',
      table: {
        type: {
          summary: [...Object.keys(normalColors), 'string'].join(' | '),
        },
        defaultValue: { summary: '$gray900' },
      },
      type: { name: 'string', required: false },
    },
    underline: {
      control: { type: 'boolean' },
      description: 'Adiciona underline ao texto',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    link: {
      control: { type: 'select' },
      description:
        'Aplica um estilo de hover para a cor desejada e cursor pointer',
      options: ['primary', 'secondary', 'success', 'error', 'alert'],
      table: {
        type: {
          summary: ['primary', 'secondary', 'success', 'error', 'alert'].join(
            ' | '
          ),
        },
      },
      type: { name: 'string', required: false },
    },
    as: {
      control: { type: 'text' },
      description:
        'Nome de uma tag na qual o componente irá se transformar. Verifique a tag ao inspecionar o componente na DOM',
      table: {
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: false },
    },
  },
  args: {
    children: 'Hello World',
    size: 'md',
    color: '$gray900',
    underline: false,
  },
} as Meta<TextProps>

export const Comum: StoryObj<TextProps> = {}

export const ComoTagAnchor: StoryObj<TextProps> = {
  args: {
    as: 'a',
    underline: true,
    link: 'primary',
    color: 'primary',
  },
}
