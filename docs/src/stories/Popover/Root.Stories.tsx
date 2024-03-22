import { Popover, PopoverRootProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<PopoverRootProps> = {
  title: 'Popover/Root',
  component: Popover.Root,
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
  },
  args: {
    children: '',
  },
} as Meta<PopoverRootProps>

export default meta
type PopoverRootStory = StoryObj<PopoverRootProps>

export const Comum: PopoverRootStory = {
  render: (args) => {
    return <Popover.Root {...args}></Popover.Root>
  },
}
