import { ComponentStory, Meta } from '@storybook/react'
import { MouseSimple } from 'phosphor-react'

import { FloatCard, FloatCardTriggerProps } from '@coaktion/visu'

export default {
  title: 'FloatCard/Trigger',
  component: FloatCard.Trigger,
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
} as Meta<FloatCardTriggerProps>

export const Comum: ComponentStory<typeof FloatCard.Trigger> = (args) => {
  return (
    <FloatCard.Root>
      <FloatCard.Trigger {...args}>
        <MouseSimple size={32} />
      </FloatCard.Trigger>
      <FloatCard.Content>
        <span>Tooltip Text</span>
      </FloatCard.Content>
    </FloatCard.Root>
  )
}
