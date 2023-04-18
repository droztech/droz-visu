import { ComponentStory, Meta } from '@storybook/react'

import { Menu, MenuRootProps } from '@coaktion/visu'

export default {
  title: 'Menu/Root',
  component: Menu.Root,
  argTypes: {
    children: {
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    expanded: {
      control: { type: 'boolean' },
      description: 'Faz com que o Menu encolha ou expanda',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    children: '',
  },
} as Meta<MenuRootProps>

export const Comum: ComponentStory<typeof Menu.Root> = (args) => {
  return <Menu.Root {...args}></Menu.Root>
}
