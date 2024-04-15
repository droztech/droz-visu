import { Calendar, CalendarProps } from '@droz-js/visu'
import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<CalendarProps> = {
  title: 'Calendar/Calendar',
  component: Calendar,
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
    mode: {
      control: 'inline-radio',
      description: 'Aplica o mode em Calendar',
      options: [
        'default',
        'multiple',
        'range',
        'single',
      ] as CalendarProps['mode'][],
      table: {
        type: {
          summary: ['default', 'multiple', 'range', 'single'].join('|'),
        },
      },
      type: { name: 'string', required: true },
      defaultValue: 'default' as CalendarProps['mode'],
    },
    selected: {
      control: 'object',
      description: 'Aplica o selected em CalendarCalendar',
      table: {
        type: { summary: 'object' },
      },
      type: { name: 'string', required: false },
    },
    onSelect: {
      action: 'clicked',
      description: 'Define o onSelect em CalendarCalendar',
      table: { type: { summary: 'function' } },
    },
  },
  args: {
    children: '',
  },
} as Meta<CalendarProps>

export default meta
type CalendarStory = StoryObj<CalendarProps>

export const Comum: CalendarStory = {
  // @ts-expect-error dynamic component
  render: ({ selected, onSelect, ...args }: CalendarProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [, updateArgs] = useArgs()

    onSelect = (data: any) => {
      updateArgs({ selected: data })
    }

    return (
      // @ts-expect-error dynamic component
      <Calendar
        selected={selected}
        onSelect={onSelect}
        mode="range"
        {...args}
      />
    )
  },
}
