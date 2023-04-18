import { ComponentStory, Meta } from '@storybook/react'

import { Menu, MenuGroupProps } from '@coaktion/visu'

export default {
  title: 'Menu/Group',
  component: Menu.Group,
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
} as Meta<MenuGroupProps>

const Template: ComponentStory<typeof Menu.Group> = (args) => {
  return (
    <Menu.Group {...args}>
      <div
        style={{ width: '240px', height: '60px', backgroundColor: 'red' }}
      ></div>
      <div
        style={{ width: '240px', height: '60px', backgroundColor: 'green' }}
      ></div>
      <div
        style={{ width: '240px', height: '60px', backgroundColor: 'blue' }}
      ></div>
    </Menu.Group>
  )
}

export const Comum = Template.bind({})
