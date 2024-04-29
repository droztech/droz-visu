import { Button, Drawer, DrawerRootProps, Icon } from '@droz-js/visu'
import { X } from '@phosphor-icons/react'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<DrawerRootProps> = {
  title: 'Drawer/Drawer',
  component: Drawer.Root,
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
    defaultOpen: {
      control: 'boolean',
      description: 'Aplica o defaultOpen em DrawerDrawer',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
    open: {
      control: 'boolean',
      description: 'Aplica o open em DrawerDrawer',
      table: {
        type: { summary: 'boolean' },
      },
      type: { name: 'boolean', required: false },
    },
    onOpenChange: {
      action: 'clicked',
      description: 'Define o onOpenChange em DrawerDrawer',
      table: { type: { summary: 'function' } },
    },
  },
  args: {
    children: '',
  },
} as Meta<DrawerRootProps>

export default meta
type DrawerDrawerStory = StoryObj<DrawerRootProps>

export const Comum: DrawerDrawerStory = {
  render: (args) => {
    return (
      <Drawer.Root {...args}>
        <Drawer.Trigger asChild>
          <Button>
            Open
          </Button>
        </Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Title</Drawer.Title>
            <Drawer.Close asChild>
              <Icon size="sm" className="absolute right-8 top-8">
                <X />
              </Icon>
            </Drawer.Close>
          </Drawer.Header>
          <Drawer.Body>
            <div className="h-[2500px] bg-error">Anything</div>
          </Drawer.Body>
          <Drawer.Footer>
            <Drawer.Close asChild>
              <Button ghost className="flex-1">
                Close
              </Button>
            </Drawer.Close>
            <Button className="flex-1">Save</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Root>
    )
  },
}
