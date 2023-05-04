import { ComponentStory, Meta } from '@storybook/react'

import { Link, LinkProps } from '@coaktion/visu'

export default {
  title: 'Link/Link',
  component: Link,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
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
    color: {
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
    underline: {
      control: { type: 'boolean' },
      description: 'Adiciona underline ao texto',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    children: '',
  },
} as Meta<LinkProps>

export const Comum: ComponentStory<typeof Link> = (args) => {
  return <Link {...args}>Hello World</Link>
}

export const ComoAnchor: ComponentStory<typeof Link> = (args) => {
  return (
    <Link asChild {...args}>
      <a href="" target="_blank">
        Hello World
      </a>
    </Link>
  )
}
