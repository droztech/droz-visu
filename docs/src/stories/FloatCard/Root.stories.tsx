import { Meta, StoryObj } from '@storybook/react'
import { MouseSimple } from 'phosphor-react'

import { Avatar, Flex, FloatCard, FloatCardRootProps } from '@droz-js/visu'

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
          <Flex.Root direction={'col'}>
            <Avatar.Root>
              <Avatar.Fallback fallback="FC" />
            </Avatar.Root>
            <span>
              O FloatCard é utilizado para estruturas mais complexas do que um
              Tooltip.
            </span>
            <span>
              O Root é apenas o container do componente. Verifique o código na
              docs.
            </span>
          </Flex.Root>
        </FloatCard.Content>
      </FloatCard.Root>
    )
  },
}
