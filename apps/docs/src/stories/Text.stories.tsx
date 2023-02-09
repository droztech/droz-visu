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
    asChild: {
      control: { type: 'boolean' },
      description:
        'Ao passar essa propriedade com o valor true, o componente irá se transformar no componente filho. É obrigatório passar um children ao utilizar essa propriedade. <b>Verifique a tag ao inspecionar o componente na DOM</b>',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    children: 'Hello World',
    size: 'md',
    color: '$gray900',
    underline: false,
    asChild: false,
  },
} as Meta<TextProps>

export const Comum: StoryObj<TextProps> = {}

export const ComoTagAnchor: StoryObj<TextProps> = {
  args: {
    asChild: true,
    underline: true,
    link: 'primary',
    color: 'primary',
    children: <a href="/">Link</a>,
  },
}
