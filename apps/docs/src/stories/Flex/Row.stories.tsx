import { ComponentStory, Meta } from '@storybook/react'

import { Flex, FlexProps } from '@coaktion/visu'

export default {
  title: 'Flex/Row',
  component: Flex.Row,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    className: {
      control: { type: 'text' },
      description: 'Aplica uma classe personalizada no container',
      table: {
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: false },
    },
    gap: {
      control: { type: 'text' },
      description: 'Aplica um gap ao espaçamento do container',
      table: {
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: false },
    },
    flex: {
      control: { type: 'text' },
      description: 'Aplica um tamanho flex ao container',
      table: {
        type: {
          summary: 'string',
        },
      },
      type: { name: 'string', required: false },
    },
    items: {
      control: { type: 'inline-radio' },
      description: 'Aplica a orientação align items no container',
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
      description: 'Aplica a orientação justify content no container',
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
    text: {
      control: { type: 'inline-radio' },
      description: 'Aplica a orientação text align no container',
      options: ['left', 'center', 'right'],
      table: {
        type: {
          summary: ['left', 'center', 'right'].join(' | '),
        },
      },
      type: { name: 'string', required: false },
    },
    red: {
      control: { type: 'boolean' },
      description:
        'Adiciona a cor de fundo vermelha para destacar o container em relação ao resto da página, ajudando no desenvolvimento',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    full: {
      control: { type: 'boolean' },
      description: 'Ocupa o tamanho máximo da largura disponível',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    center: {
      control: { type: 'boolean' },
      description:
        'Centraliza os elementos horizontalmente e verticalmente dentro do container',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
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
    children: '',
  },
} as Meta<FlexProps>

const Template: ComponentStory<typeof Flex.Row> = (args) => {
  return (
    <Flex.Row {...args}>
      <div style={{ backgroundColor: '#f00', width: '5rem' }}>First</div>
      <div style={{ backgroundColor: '#0f0', width: '5rem' }}>Second</div>
      <div style={{ backgroundColor: '#00f', width: '5rem' }}>Third</div>
    </Flex.Row>
  )
}

export const Comum = Template.bind({})
