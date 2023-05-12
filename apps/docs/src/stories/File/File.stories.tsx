import { Meta, StoryObj } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

import { File, FileProps } from '@coaktion/visu'

const meta: Meta<FileProps> = {
  title: 'File/File',
  component: File,
  decorators: [withDesign],
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/vimM8ueWbwKbUB2F4anWLS/%5BDroz-Nexo%5D-Telas?type=design&node-id=3295-27317&t=t0RzfGnHc1izbdAY-0',
    },
  },
}

export default meta
type FileStory = StoryObj<FileProps>

export const Comum: FileStory = {
  render: (args) => {
    return <File {...args}></File>
  },
}
