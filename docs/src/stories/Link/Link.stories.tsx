import { Link, LinkProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<LinkProps> = {
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
            ' | ',
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
    asChild: false,
    color: 'primary',
    underline: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3107-18756&t=AdZjH6UtpERmhB5O-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type LinkStory = StoryObj<LinkProps>

export const Comum: LinkStory = {
  render: (args) => {
    return <Link {...args}>Hello World</Link>
  },
}

export const ComoAnchor: LinkStory = {
  render: (args) => {
    return (
      <Link asChild {...args}>
        <a href="google.com" target="_blank">
          Hello World
        </a>
      </Link>
    )
  },
}
