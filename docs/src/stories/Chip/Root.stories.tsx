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
  },
}

export default meta

type Story = StoryObj<ChipProps>

export const Comun: Story = {
  render: (args) => <Chip.Root {...args}>Chip</Chip.Root>,
}

export const ComIcon: Story = {
  render: (args) => (
    <Chip.Root {...args}>
      Chip
      <Chip.Button>
        <X />
      </Chip.Button>
    </Chip.Root>
  ),
}
