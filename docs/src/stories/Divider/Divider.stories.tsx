import { Divider, DividerProps } from '@droz-js/visu'
import { SquaresFour } from '@phosphor-icons/react'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<DividerProps> = {
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
    orientation: {
      control: 'inline-radio',
      description: 'Aplica o orientation em Divider',
      options: ['horizontal', 'vertical'] as DividerProps['orientation'][],
      table: {
        type: {
          summary: ['horizontal', 'vertical'].join('|'),
        },
      },
      type: { name: 'string', required: true },
    },
  },
  args: {
    orientation: 'horizontal',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vimM8ueWbwKbUB2F4anWLS/%5BDroz-Nexo%5D-Telas?type=design&node-id=3295-26683&t=t0RzfGnHc1izbdAY-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type DividerStory = StoryObj<DividerProps>

export const ComumHorizontal: DividerStory = {
  render: (args: any) => {
    return (
      <div
        style={{
          width: '300px',
          height: '400px',
          display: 'flex',
          flexDirection: args?.orientation === 'vertical' ? 'column' : 'row',
        }}
      >
        <Divider {...args} />
      </div>
    )
  },
}

export const ComTextoHorizontal: DividerStory = {
  render: (args: any) => {
    return (
      <div
        style={{
          width: '300px',
          height: '400px',
          display: 'flex',
          flexDirection: args?.orientation === 'vertical' ? 'column' : 'row',
        }}
      >
        <Divider {...args}>OU</Divider>
      </div>
    )
  },
}

export const ComIconeHorizontal: DividerStory = {
  render: (args: any) => {
    return (
      <div
        style={{
          width: '300px',
          height: '400px',
          display: 'flex',
          flexDirection: args?.orientation === 'vertical' ? 'column' : 'row',
        }}
      >
        <Divider {...args}>
          <SquaresFour />
        </Divider>
      </div>
    )
  },
}
