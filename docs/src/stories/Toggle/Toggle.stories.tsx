import { Toggle, ToggleRootProps } from '@droz-js/visu'
import { Alien, FlyingSaucer, Planet } from '@phosphor-icons/react'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<ToggleRootProps> = {
  title: 'Toggle/Toggle',
  component: Toggle.Root,
  argTypes: {
    children: {
      control: 'none',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      type: { name: 'other', required: false, value: 'React.ReactNode' },
    },
    expanded: {
      control: 'boolean',
      description: 'Aplica o expanded em ToggleToggle',
      table: {
        type: {
          summary: 'boolean',
        },
      },
      type: { name: 'boolean', required: false },
      defaultValue: true,
    },
    type: {
      control: 'inline-radio',
      description: 'Aplica o type em ToggleToggle',
      options: ['multiple', 'single'] as ToggleRootProps['type'][],
      table: {
        type: {
          summary: ['multiple', 'single'].join('|'),
        },
      },
      type: { name: 'string', required: true },
    },
  },
  args: {
    children: '',
    type: 'single',
    expanded: true,
  },
} as Meta<ToggleRootProps>

export default meta
type ToggleRootStory = StoryObj<ToggleRootProps>

export const Comum: ToggleRootStory = {
  render: (args: ToggleRootProps) => {
    return (
      <Toggle.Root {...args}>
        <Toggle.Item value="ufo" text="UFO" icon={<FlyingSaucer />} />
        <Toggle.Item value="alien" text="Alien" icon={<Alien />} />
        <Toggle.Item value="planet" text="Planet" icon={<Planet />} />
      </Toggle.Root>
    )
  },
}
