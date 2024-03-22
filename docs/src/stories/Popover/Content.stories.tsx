import { Popover, PopoverContentProps } from '@droz-js/visu'
import { ShareFat } from '@phosphor-icons/react'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<PopoverContentProps> = {
  title: 'Popover/Content',
  component: Popover.Content,
  argTypes: {
    children: {
      control: 'none',
      description: 'Conteúdo do popover.',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    align: {
      control: 'none',
      description: 'Alinhamento do conteúdo do popover.',
      options: ['center', 'start', 'end'],
      table: {
        type: { summary: ['center', 'start', 'end'].join('|') },
        defaultValue: { summary: 'center' },
      },
      type: {
        name: 'enum',
        required: false,
        value: ['center', 'start', 'end'],
      },
    },

    side: {
      control: 'none',
      description: 'Posição do conteúdo em relação ao popover.',
      options: ['top', 'right', 'bottom', 'left'],
      table: {
        type: { summary: ['top', 'right', 'bottom', 'left'].join('|') },
        defaultValue: { summary: 'bottom' },
      },
      type: {
        name: 'enum',
        required: false,
        value: ['top', 'right', 'bottom', 'left'],
      },
    },
  },
  args: {
    children: '',
  },
}

export default meta
type PopoverContentStory = StoryObj<PopoverContentProps>

export const Comum: PopoverContentStory = {
  render: (args) => {
    return (
      <Popover.Root>
        <Popover.Trigger>
          <ShareFat size={32} />
        </Popover.Trigger>
        <Popover.Content {...args}>
          <div className="flex flex-col">
            <span>
              O Root é apenas o container do componente. Verifique o código na
              docs.
            </span>
          </div>
        </Popover.Content>
      </Popover.Root>
    )
  },
}
