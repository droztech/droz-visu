import { Meta, StoryObj } from '@storybook/react'

import { Flex, FlexRootProps } from '@coaktion/visu'

const meta: Meta<FlexRootProps> = {
  title: 'Flex/Root',
  component: Flex.Root,
  argTypes: {
    children: {
      control: 'none',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    asChild: {
      control: 'none',
      description:
        'Ao passar essa propriedade com o valor true, o componente irá se transformar no componente filho. É obrigatório passar um children ao utilizar essa propriedade. <b>Verifique a tag ao inspecionar o componente na DOM</b>.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    center: {
      control: { type: 'boolean' },
      description:
        'Propriedade que centraliza os elementos horizontalmente e verticalmente dentro do componente.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    direction: {
      control: { type: 'inline-radio' },
      options: ['col', 'row'],
      description:
        'Define a direção dos elementos filhos do componente em linha ou coluna.',
      table: {
        type: { summary: ['col', 'row'].join(' | ') },
      },
      type: { name: 'boolean', required: false },
    },
    full: {
      control: { type: 'boolean' },
      description:
        'Propriedade que faz com que o componente ocupe todo o espaço disponível.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    gap: {
      control: { type: 'inline-radio' },
      options: ['lg', 'md', 'sm'],
      description:
        'Propriedade que define a distância entre os elementos filhos do componente.',
      table: {
        type: {
          summary: ['lg', 'md', 'sm'].join(' | '),
        },
      },
      type: { name: 'string', required: false },
    },
    items: {
      control: { type: 'inline-radio' },
      description:
        'Define o valor da propriedade css `align-items` no componente.',
      options: ['center', 'start', 'end', 'stretch'],
      table: {
        type: {
          summary: ['center', 'start', 'end', 'stretch'].join(' | '),
        },
      },
      type: { name: 'string', required: false },
    },
    justify: {
      control: { type: 'inline-radio' },
      description:
        'Define o valor da propriedade css `justify-content` no componente.',
      options: ['center', 'start', 'end', 'stretch', 'between', 'evenly'],
      table: {
        type: {
          summary: [
            'center',
            'start',
            'end',
            'stretch',
            'between',
            'evenly',
          ].join(' | '),
        },
      },
      type: { name: 'string', required: false },
    },
    red: {
      control: { type: 'boolean' },
      description:
        'Propriedade que adiciona uma cor de fundo vermelha para destacar o componente em relação ao resto da página, ajudando no desenvolvimento.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    text: {
      control: { type: 'inline-radio' },
      description: 'Define o valor da propriedade `text-align` no componente.',
      options: ['left', 'center', 'right'],
      table: {
        type: {
          summary: ['left', 'center', 'right'].join(' | '),
        },
      },
      type: { name: 'string', required: false },
    },
  },
  args: {
    children: '',
    asChild: false,
    center: false,
    direction: '',
    full: false,
    gap: 'md',
    items: '',
    justify: '',
    red: false,
    text: '',
  },
}

export default meta
type FexRootStory = StoryObj<FlexRootProps>

export const Comum: FexRootStory = {
  render: (args) => {
    return (
      <Flex.Root
        {...args}
        style={{ border: '1px solid green', width: '30rem', height: '15rem' }}
      >
        <div style={{ border: '1px solid blue', width: '5rem' }}>First</div>
        <div style={{ border: '1px solid blue', width: '8rem' }}>Second</div>
        <div style={{ border: '1px solid blue', width: '5rem' }}>Third</div>
      </Flex.Root>
    )
  },
}

export const ComAsChild: FexRootStory = {
  name: 'Com asChild',
  render: (args) => {
    return (
      <div>
        <span>Componente Flex como tag span</span>
        <Flex.Root
          {...args}
          style={{ border: '1px solid green', width: '30rem', height: '15rem' }}
          asChild
        >
          <span>
            <div style={{ border: '1px solid blue', width: '5rem' }}>First</div>
            <div style={{ border: '1px solid blue', width: '8rem' }}>
              Second
            </div>
            <div style={{ border: '1px solid blue', width: '5rem' }}>Third</div>
          </span>
        </Flex.Root>
      </div>
    )
  },
}