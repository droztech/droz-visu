import { useArgs } from '@storybook/client-api'
import { ComponentStory, Meta } from '@storybook/react'

import { Sidebar, SidebarRootProps } from '@coaktion/visu'

export default {
  title: 'Sidebar/Root',
  component: Sidebar.Root,
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
      description: 'Faz com que o sidebar encolha ou expanda',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      type: { name: 'boolean', required: false },
    },
    setExpanded: {
      action: 'clicked',
      description: 'Define o evento de expandir o sidebar',
      table: { type: { summary: 'function' } },
    },
  },
  args: {
    children: '',
  },
} as Meta<SidebarRootProps>

export const Comum: ComponentStory<typeof Sidebar.Root> = (args) => {
  const [{ expanded }, updateArgs] = useArgs()
  delete args.setExpanded

  const toggleExpanded = () => {
    updateArgs({ expanded: !expanded })
  }

  return <Sidebar.Root setExpanded={toggleExpanded} {...args}></Sidebar.Root>
}

export const SemSetExpanded: ComponentStory<typeof Sidebar.Root> = (args) => {
  delete args.setExpanded

  return <Sidebar.Root {...args}></Sidebar.Root>
}
