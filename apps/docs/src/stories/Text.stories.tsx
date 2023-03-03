import { Meta, StoryObj } from '@storybook/react'

import { Text, TextProps } from '@coaktion/visu'

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
      },
      type: { name: 'string', required: false },
    },
    align: {
      control: { type: 'inline-radio' },
      description: 'Define o alinhamento da fonte',
      options: ['left', 'center', 'right'],
      table: {
        type: {
          summary: ['left', 'center', 'right'].join('|'),
        },
      },
      type: { name: 'string', required: false },
    },
    ellipsis: {
      control: { type: 'boolean' },
      description:
        'Adiciona reticências ao texto caso ele precise de uma quebra de linha',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
    weight: {
      control: { type: 'inline-radio' },
      description: 'Define a grossura da fonte',
      options: ['light', 'normal', 'semibold', 'bold'],
      table: {
        type: {
          summary: ['light', 'normal', 'semibold', 'bold'].join('|'),
        },
      },
      type: { name: 'string', required: false },
    },
    color: {
      control: { type: 'text' },
      description: 'Define a cor do texto, uma string com uma cor qualquer',
      table: {
        type: {
          summary: ['string'].join(' | '),
        },
      },
      type: { name: 'string', required: false },
    },
    underline: {
      control: { type: 'boolean' },
      description: 'Adiciona underline ao texto',
      table: {
        type: { summary: 'boolean' },
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
      },
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    children: 'Hello World',
    size: 'md',
    weight: 'normal',
    color: 'inherit',
    underline: false,
    asChild: false,
  },
} as Meta<TextProps>

export const Comum: StoryObj<TextProps> = {}

export const ComoTagAnchor: StoryObj<TextProps> = {
  argTypes: {
    children: {
      control: 'none',
    },
  },
  args: {
    asChild: true,
    underline: true,
    link: 'primary',
    color: 'primary',
    children: <a href="/">Link</a>,
  },
}
