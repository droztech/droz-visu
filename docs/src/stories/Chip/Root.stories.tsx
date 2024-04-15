import { Chip, ChipProps } from '@droz-js/visu'
import { X } from '@phosphor-icons/react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<ChipProps> = {
  title: 'Chip/Root',
  component: Chip.Root,
  argTypes: {
    children: {
      control: 'none',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    label: {
      control: 'text',
      description: 'Define o label do Chip.',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: true },
    },
  },
}

export default meta

type Story = StoryObj<ChipProps>

export const Comun: Story = {
  render: (args) => <Chip.Root {...args} label="Chip" />,
}

export const ComIcon: Story = {
  render: (args) => (
    <Chip.Root {...args} label="Chip">
      <Chip.Icon icon={<X />} />
    </Chip.Root>
  ),
}
