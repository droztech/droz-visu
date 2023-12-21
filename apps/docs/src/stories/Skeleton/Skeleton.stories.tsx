import { Skeleton, SkeletonProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<SkeletonProps> = {
  title: 'Skeleton/Skeleton',
  component: Skeleton,
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
    className: {
      control: 'text',
      description: 'Aplica o className em SkeletonSkeleton',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: false },
    },
    repeat: {
      control: 'number',
      description: 'Aplica o repeat em SkeletonSkeleton',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1 },
      },
      type: { name: 'number', required: false },
      defaultValue: 1 as SkeletonProps['repeat'],
    },
  },
  args: {
    children: '',
    className: 'h-32 w-32',
  },
} as Meta<SkeletonProps>

export default meta
type SkeletonSkeletonStory = StoryObj<SkeletonProps>

export const Comum: SkeletonSkeletonStory = {
  render: (args) => {
    return (
      <div className="h-32 w-32">
        <Skeleton {...args} />
      </div>
    )
  },
}
