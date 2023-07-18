import { Meta, StoryObj } from '@storybook/react'
import { MouseSimple } from 'phosphor-react'

import { Avatar, Flex, FloatCard, FloatCardContentProps } from '@coaktion/visu'

const meta: Meta<FloatCardContentProps> = {
  title: 'FloatCard/Content',
  component: FloatCard.Content,
  argTypes: {
    children: {
      control: 'none',
      description: 'Conteúdo do card.',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    side: {
      control: { type: 'inline-radio' },
      description: 'Define o lado em que o card será exibido.',
      options: ['bottom', 'left', 'right', 'top'],
      table: {
        type: {
          summary: ['bottom', 'left', 'right', 'top'].join('|'),
        },
      },
      type: { name: 'string', required: false },
    },
  },
  args: {
    children: '',
  },
}

export default meta
type FloatCardContentStory = StoryObj<FloatCardContentProps>

export const Comum: FloatCardContentStory = {
  render: (args) => {
    return (
      <FloatCard.Root>
        <FloatCard.Trigger>
          <MouseSimple size={32} />
        </FloatCard.Trigger>
        <FloatCard.Content {...args}>
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
