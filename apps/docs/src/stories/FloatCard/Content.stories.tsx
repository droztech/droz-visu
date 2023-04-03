import { ComponentStory, Meta } from '@storybook/react'
import { MouseSimple } from 'phosphor-react'

import { FloatCard, FloatCardContentProps } from '@coaktion/visu'

export default {
  title: 'FloatCard/Content',
  component: FloatCard.Content,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    side: {
      control: { type: 'inline-radio' },
      description: 'Define o lado tooltip',
      options: [
        'bottom',
        'left',
        'right',
        'top',
      ] as FloatCardContentProps['side'][],
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
} as Meta<FloatCardContentProps>

export const Comum: ComponentStory<typeof FloatCard.Content> = (args) => {
  return (
    <FloatCard.Root>
      <FloatCard.Trigger>
        <MouseSimple size={32} />
      </FloatCard.Trigger>
      <FloatCard.Content {...args}>
        <span>Tooltip Text</span>
      </FloatCard.Content>
    </FloatCard.Root>
  )
}
