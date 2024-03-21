import { Avatar, Popover, PopoverRootProps } from '@droz-js/visu'
import { ShareFat } from '@phosphor-icons/react'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<PopoverRootProps> = {
  title: 'Popover/Root',
  component: Popover.Content,
  argTypes: {
    children: {
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
type PopoverRootStory = StoryObj<PopoverRootProps>

export const Comum: PopoverRootStory = {
  render: (args) => {
    return (
      <Popover.Root {...args}>
        <Popover.Trigger>
          <ShareFat size={32} />
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
    )
  },
}
