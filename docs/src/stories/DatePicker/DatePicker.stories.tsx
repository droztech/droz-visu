import { DatePicker, DatePickerProps } from '@droz-js/visu'
import { Calendar as CalendarIcon } from '@phosphor-icons/react'
import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<DatePickerProps> = {
  title: 'DatePicker/DatePicker',
  component: DatePicker,
  argTypes: {
    mode: {
      control: 'inline-radio',
      description: 'Aplica o mode em DatePicker',
      options: [
        'default',
        'multiple',
        'range',
        'single',
      ] as DatePickerProps['mode'][],
      table: {
        type: {
          summary: ['default', 'multiple', 'range', 'single'].join('|'),
        },
      },
      type: { name: 'string', required: true },
      defaultValue: 'default' as DatePickerProps['mode'],
    },
    placeholder: {
      control: 'text',
      description: 'Define o placeholder do componente.',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: false },
    },
    icon: {
      description:
        'Propriedade que recebe o ícone a ser exibido no componente.',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      type: { name: 'function', required: false },
    },
    selected: {
      control: 'object',
      description: 'Aplica o selected em DatePicker',
      table: {
        type: { summary: 'object' },
      },
      type: { name: 'string', required: false },
    },
    onSelect: {
      action: 'clicked',
      description: 'Define o onSelect em DatePicker',
      table: { type: { summary: 'function' } },
    },
  },
  args: {},
} as Meta<DatePickerProps>

export default meta
type DatePickerStory = StoryObj<DatePickerProps>

export const Comum: DatePickerStory = {
  // @ts-expect-error dynamic component
  render: ({ selected, onSelect, ...args }: DatePickerProps) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [, updateArgs] = useArgs()

    onSelect = (data: any) => {
      updateArgs({ selected: data })
    }

    return (
      // @ts-expect-error dynamic component
      <DatePicker
        selected={selected}
        onSelect={onSelect}
        mode="range"
        icon={<CalendarIcon />}
        placeholder="Selecione uma data"
      />
    )
  },
}
