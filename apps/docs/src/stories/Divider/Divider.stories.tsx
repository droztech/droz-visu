import { Meta, StoryObj } from '@storybook/react'
import { SquaresFour } from 'phosphor-react'
import { withDesign } from 'storybook-addon-designs'

import { Divider, DividerProps } from '@coaktion/visu'

const meta: Meta<DividerProps> = {
  title: 'Divider/Divider',
  component: Divider,
  decorators: [withDesign],
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vimM8ueWbwKbUB2F4anWLS/%5BDroz-Nexo%5D-Telas?type=design&node-id=3295-26683&t=t0RzfGnHc1izbdAY-0',
    },
  },
}

export default meta
type DividerStory = StoryObj<DividerProps>

export const Comum: DividerStory = {
  render: (args) => {
    return (
      <div style={{ width: '300px', height: '400px', display: 'flex' }}>
        <Divider {...args} />
      </div>
    )
  },
}

export const ComTexto: DividerStory = {
  render: (args) => {
    return (
      <div style={{ width: '300px', height: '400px', display: 'flex' }}>
        <Divider {...args}>OU</Divider>
      </div>
    )
  },
}

export const ComIcone: DividerStory = {
  render: (args) => {
    return (
      <div style={{ width: '300px', height: '400px', display: 'flex' }}>
        <Divider {...args}>
          <SquaresFour />
        </Divider>
      </div>
    )
  },
}
