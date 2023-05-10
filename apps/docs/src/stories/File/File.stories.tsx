import { ComponentStory, Meta } from '@storybook/react'

import { File, FileProps } from '@coaktion/visu'

export default {
  title: 'File/File',
  component: File,
  argTypes: {
    formats: {
      control: 'object',
      description: 'Aplica o formats em File',
      table: {
        type: { summary: 'object' },
      },
      type: { name: 'string', required: false },
      defaultValue: ['image/jpeg', 'image/png', 'image/gif'],
    },
  },
  args: {
    children: '',
  },
} as Meta<FileProps>

export const Comum: ComponentStory<typeof File> = (args) => {
  return <File {...args}></File>
}
