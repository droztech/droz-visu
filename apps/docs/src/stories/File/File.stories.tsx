import { File, FileProps } from '@coaktion/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<FileProps> = {
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3487-664&t=yA8ycLkgL79CIrNW-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type FileStory = StoryObj<FileProps>

export const Comum: FileStory = {
  render: (args) => {
    return <File {...args} />
  },
}
