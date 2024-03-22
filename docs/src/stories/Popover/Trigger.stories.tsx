import { Avatar, Popover, PopoverTriggerProps } from '@droz-js/visu'
import { ShareFat } from '@phosphor-icons/react'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<PopoverTriggerProps> = {
  title: 'Popover/Trigger',
  component: Popover.Trigger,
  argTypes: {
    children: {
      control: 'none',
      description:
        'Conteúdo exibido para receber o hover que irá mostar o card.',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
  },
  args: {
    children: '',
  },
}

export default meta
type PopoverRootStory = StoryObj<PopoverTriggerProps>

export const Comum: PopoverRootStory = {
  render: (args) => {
    return (
      <Popover.Root {...args}>
        <Popover.Trigger>
          <ShareFat size={32} />
        </Popover.Trigger>
        <Popover.Content>
          <div className="flex flex-col">
            <span>
              O Popover é utilizado para estruturas mais complexas do que um
              Tooltip.
            </span>
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

export const ComComponente: PopoverRootStory = {
  name: 'Componente como trigger',
  render: (args) => {
    return (
      <div className="flex flex-col items-center justify-center">
        <span>Qualquer elemento pode ser um trigger</span>
        <Popover.Root>
          <Popover.Trigger {...args}>
            <div>
              <Avatar fallback="FC" />
            </div>
          </Popover.Trigger>
          <Popover.Content>
            <div className="flex flex-col">
              <Avatar fallback="FC" />
              <span>
                O Root é apenas o container do componente. Verifique o código na
                docs.
              </span>
            </div>
          </Popover.Content>
        </Popover.Root>
      </div>
    )
  },
}
