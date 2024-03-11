import { Avatar, FloatCard, FloatCardRootProps } from '@droz-js/visu'
import { MouseSimple } from '@phosphor-icons/react'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<FloatCardRootProps> = {
  title: 'FloatCard/Root',
  component: FloatCard.Content,
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
type FloatCardRootStory = StoryObj<FloatCardRootProps>

export const Comum: FloatCardRootStory = {
  render: (args) => {
    return (
      <FloatCard.Root {...args}>
        <FloatCard.Trigger>
          <MouseSimple size={32} />
        </FloatCard.Trigger>
        <FloatCard.Content>
          <div className="flex flex-col">
            <Avatar fallback="FC" />
            <span>
              O FloatCard é utilizado para estruturas mais complexas do que um
              Tooltip.
            </span>
            <span>
              O Root é apenas o container do componente. Verifique o código na
              docs.
            </span>
          </div>
        </FloatCard.Content>
      </FloatCard.Root>
    )
  },
}
