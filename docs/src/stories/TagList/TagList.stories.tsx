import { TagList } from '@droz-js/visu'
import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<TagListRootProps> = {
  title: 'TagList/Root',
  component: TagList,
  argTypes: {
    children: {
      control: 'none',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilita todos os elementos do componente.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    status: {
      control: { type: 'select' },
      description: 'Define o status do componente.',
      options: ['default', 'error', 'success'],
      table: {
        type: {
          summary: ['default', 'error', 'success'].join('|'),
        },
      },
      type: { name: 'string', required: false },
    },
    value: {
      control: 'array',
      description: 'Aplica o value em InputCopyRoot',
      table: {
        type: { summary: 'object' },
      },
      type: { name: 'string', required: false },
    },
    onChange: {
      action: 'clicked',
      description: 'Define o onChange em InputCopyRoot',
      table: { type: { summary: 'function' } },
    },
  },
  args: {
    children: '',
    disabled: false,
    status: undefined,
    value: ['tag1', 'tag2', 'tag3'],
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3107-18717&t=AdZjH6UtpERmhB5O-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type TagListRootStory = StoryObj<TagListRootProps>

// render: ({ onOpenChange, ...args }) => {
//   const [, updateArgs] = useArgs()

//   onOpenChange = (open: boolean) => {
//     updateArgs({ open })
//   }

//   return <Dialog.Root onOpenChange={onOpenChange} {...args} />
// },

export const Comum: TagListRootStory = {
  render: ({ onChange, ...args }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [_, updateArgs] = useArgs()

    onChange = (ev) =>
      updateArgs({ value: args.value.filter((item) => item !== ev) })

    return (
      <div className="flex w-[80vw] items-center justify-center">
        <TagList
          onChange={onChange}
          value={['tag1', 'tag2', 'tag3']}
          {...args}
        ></TagList>
      </div>
    )
  },
}
