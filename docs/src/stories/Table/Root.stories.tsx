import { Button, Table, TableRootProps } from '@droz-js/visu'
import { Pencil } from '@phosphor-icons/react'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<TableRootProps> = {
  title: 'Table/Root',
  component: Table.Root,
  argTypes: {
    children: {
      control: 'none',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      type: { name: 'other', required: false, value: 'React.ReactNode' },
    },
    hide: {
      control: 'inline-check',
      description: 'Aplica o hide em TableRoot',
      options: [1, 2, 3, 4] as TableRootProps['hide'],
      table: {
        type: {
          summary: [1, 2, 3, 4].join('|'),
        },
      },
      type: { name: 'number', required: false },
    },
    fixed: {
      control: 'boolean',
      description: 'Aplica o fixed em TableRoot',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
      defaultValue: false as TableRootProps['fixed'],
    },
  },
  args: {
    children: '',
  },
} as Meta<TableRootProps>

export default meta
type TableRootStory = StoryObj<TableRootProps>

export const Comum: TableRootStory = {
  render: (args) => {
    const test = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6']

    return (
      <div className="border border-error" style={{ width: 920 }}>
        <Table.Root {...args}>
          <Table.Header>
            <Table.Row>
              <Table.Head>Name</Table.Head>
              <Table.Head>Description</Table.Head>
              <Table.Head className="text-right">Last Update</Table.Head>
              <Table.Head className="text-right">Actions</Table.Head>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {test.map((item, index) => (
              <Table.Row
                key={item}
                selected={['test5', 'test6'].includes(item)}
              >
                <Table.Cell>{item}</Table.Cell>
                <Table.Cell>
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, asperiores quis. Ex laboriosam quasi fugit
                    obcaecati a quaerat sapiente culpa placeat dicta quisquam
                    quibusdam deserunt sit, cum adipisci, labore iusto.
                  </span>
                </Table.Cell>
                <Table.Cell className="justify-end">
                  {new Date().toISOString()}
                </Table.Cell>
                <Table.Cell className="justify-end">
                  <Button light size="sm">
                    <Pencil />
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    )
  },
}
