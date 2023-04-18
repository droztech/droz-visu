import { ComponentStory, Meta } from '@storybook/react'

import { Menu, MenuDividerProps } from '@coaktion/visu'

export default {
  title: 'Menu/Divider',
  component: Menu.Divider,
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
} as Meta<MenuDividerProps>

const Template: ComponentStory<typeof Menu.Divider> = (args) => {
  return (
    <div style={{ width: '240px' }}>
      <Menu.Divider {...args}></Menu.Divider>
    </div>
  )
}

export const Comum = Template.bind({})
