import { Meta, StoryObj } from '@storybook/react'

import { Flex, Pagination, PaginationProps } from '@droz-js/visu'

const meta: Meta<PaginationProps> = {
  title: 'Pagination/Pagination',
  component: Pagination,
  argTypes: {
    current: {
      control: 'number',
      description: 'Define a página atual.',
      table: {
        type: { summary: 'number' },
      },
      type: { name: 'number', required: true },
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o componente.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
      defaultValue: false as PaginationProps['disabled'],
    },
    initialPage: {
      control: 'number',
      description:
        'Define o número da página inicial. Iniciando em 0 para a primeira página.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
      type: { name: 'number', required: false },
    },
    pageCount: {
      control: 'number',
      description: 'Define o número total de páginas.',
      table: {
        type: { summary: 'number' },
      },
      type: { name: 'number', required: true },
    },
    size: {
      control: 'inline-radio',
      description: 'Define o tamanho do componente.',
      options: ['md', 'sm'] as PaginationProps['size'][],
      table: {
        type: {
          summary: ['md', 'sm'].join('|'),
        },
        defaultValue: { summary: 'md' },
      },
      type: { name: 'string', required: false },
    },
    onClick: {
      action: 'click',
      description:
        'Evento de clique do componente. Emite informações de qualquer parte clicada do componente.',
      table: { type: { summary: 'function' } },
    },
    onPageActive: {
      action: 'pageActive',
      description:
        'Evento que dispara quando uma página ativa é clicada. Emite informações da página ativa.',
      table: { type: { summary: 'function' } },
    },
    onPageChange: {
      action: 'pageChange',
      description:
        'Evento de troca de página do componente. Emite informações da página atual.',
      table: { type: { summary: 'function' } },
    },
  },
  args: {
    current: 1,
    disabled: false,
    initialPage: 0,
    pageCount: 1,
    size: 'md',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3107-17233&t=gSZqfhVYy3KRKNHz-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type PaginationStory = StoryObj<PaginationProps>

export const Comum: PaginationStory = {
  render: (args) => {
    return (
      <Flex.Col center>
        <span>
          O componente foi criado utilizando react-paginate. Para ver todas as
          propriedades acesse a documentação do react-paginate.
        </span>
        <Pagination {...args} />
      </Flex.Col>
    )
  },
}

export const MaisPaginas: PaginationStory = {
  args: {
    current: 5,
    pageCount: 10,
    initialPage: 4,
  },
  name: 'Com mais páginas',
  render: (args) => {
    return (
      <Flex.Col center>
        <span>
          O componente foi criado utilizando react-paginate. Para ver todas as
          propriedades acesse a documentação do react-paginate.
        </span>
        <Pagination {...args} />
      </Flex.Col>
    )
  },
}
