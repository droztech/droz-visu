import { Meta, StoryObj } from '@storybook/react'
import { MouseSimple } from 'phosphor-react'

import { Avatar, Flex, FloatCard, FloatCardTriggerProps } from '@coaktion/visu'

const meta: Meta<FloatCardTriggerProps> = {
  title: 'FloatCard/Trigger',
  component: FloatCard.Trigger,
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
type FloatCardRootStory = StoryObj<FloatCardTriggerProps>

export const Comum: FloatCardRootStory = {
  render: (args) => {
    return (
      <FloatCard.Root>
        <FloatCard.Trigger {...args}>
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

export const ComComponente: FloatCardRootStory = {
  name: 'Componente como trigger',
  render: (args) => {
    return (
      <Flex.Col center>
        <span>Qualquer elemento pode ser um trigger</span>
        <FloatCard.Root>
          <FloatCard.Trigger {...args}>
            <div>
              <Avatar.Root>
                <Avatar.Fallback fallback="FC" />
              </Avatar.Root>
            </div>
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
      </Flex.Col>
    )
  },
}
