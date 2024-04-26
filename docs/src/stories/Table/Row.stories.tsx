import { Table, TableRowProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<TableRowProps> = {
  title: 'Table/Row',
  component: Table.Row,
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
    selected: {
      control: 'boolean',
      description: 'Aplica o selected em TableRow',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
      defaultValue: false as TableRowProps['selected'],
    },
  },
  args: {
    children: '',
  },
} as Meta<TableRowProps>

export default meta
type TableRowStory = StoryObj<TableRowProps>

export const Comum: TableRowStory = {
  render: (args) => {
    return (
      <div className="border border-error" style={{ width: 920 }}>
        <Table.Root fixed>
          <Table.Body>
            <Table.Row {...args}>
              <Table.Cell>
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, asperiores quis. Ex laboriosam quasi fugit obcaecati
                  a quaerat sapiente culpa placeat dicta quisquam quibusdam
                  deserunt sit, cum adipisci, labore iusto.
                </span>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </div>
    )
  },
}
