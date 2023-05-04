import { ComponentStory, Meta } from '@storybook/react'
import { SquaresFour } from 'phosphor-react'

import { Divider, DividerProps } from '@coaktion/visu'

export default {
  title: 'Divider/Divider',
  component: Divider,
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
} as Meta<DividerProps>

export const Comum: ComponentStory<typeof Divider> = (args) => {
  return <Divider {...args} />
}

export const ComTexto: ComponentStory<typeof Divider> = (args) => {
  return <Divider {...args}>OU</Divider>
}

export const ComIcone: ComponentStory<typeof Divider> = (args) => {
  return (
    <Divider {...args}>
      <SquaresFour />
    </Divider>
  )
}
