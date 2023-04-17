import { useArgs } from '@storybook/client-api'
import { ComponentStory, Meta } from '@storybook/react'

import { Pagination, PaginationProps } from '@coaktion/visu'

export default {
  title: 'Pagination/Pagination',
  component: Pagination,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    current: {
      control: 'number',
      description: 'Aplica o current em Pagination',
      table: {
        type: { summary: 'number' },
      },
      type: { name: 'number', required: true },
      defaultValue: 5,
    },
    disabled: {
      control: 'boolean',
      description: 'Aplica o disabled em Pagination',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
      defaultValue: false as PaginationProps['disabled'],
    },
    pageCount: {
      control: 'number',
      description: 'Aplica o pageCount em Pagination',
      table: {
        type: { summary: 'number' },
      },
      type: { name: 'number', required: true },
      defaultValue: 10,
    },
    size: {
      control: 'inline-radio',
      description: 'Aplica o size em Pagination',
      options: ['md', 'sm'] as PaginationProps['size'][],
      table: {
        type: {
          summary: ['md', 'sm'].join('|'),
        },
      },
      type: { name: 'string', required: false },
      defaultValue: 'md' as PaginationProps['size'],
    },
    onPageChange: {
      action: 'clicked',
      description: 'Define o onPageChange em Pagination',
      table: { type: { summary: 'function' } },
    },
  },
  args: {
    children: '',
  },
} as Meta<PaginationProps>

export const Comum: ComponentStory<typeof Pagination> = ({
  // eslint-disable-next-line unused-imports/no-unused-vars, react/prop-types
  onPageChange,
  ...args
}) => {
  const [{ current }, updateArgs] = useArgs()

  const setCurrent = (ev: number) => {
    updateArgs({ current: ev })
  }

  return <Pagination onPageChange={setCurrent} {...args} />
}
