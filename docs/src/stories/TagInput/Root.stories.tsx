import { TagInput, TagInputRootProps } from '@droz-js/visu'
import { Envelope } from '@phosphor-icons/react'
import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<TagInputRootProps> = {
  title: 'TagInput/Root',
  component: TagInput.Root,
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
type TagInputRootStory = StoryObj<TagInputRootProps>

// render: ({ onOpenChange, ...args }) => {
//   const [, updateArgs] = useArgs()

//   onOpenChange = (open: boolean) => {
//     updateArgs({ open })
//   }

//   return <Dialog.Root onOpenChange={onOpenChange} {...args} />
// },

export const Comum: TagInputRootStory = {
  render: ({ onChange, ...args }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [_, updateArgs] = useArgs()

    onChange = (ev) => updateArgs({ value: ev })

    return (
      <div className="flex w-[80vw] items-center justify-center">
        <TagInput.Root onChange={onChange} {...args}>
          <TagInput.Input
            type="text"
            placeholder="Digite vírgula para separar as tags"
            value={args.value}
            onChange={onChange}
          />
        </TagInput.Root>
      </div>
    )
  },
}

export const ComIcone: TagInputRootStory = {
  render: ({ onChange, ...args }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [_, updateArgs] = useArgs()

    onChange = (ev) => updateArgs({ value: ev })

    return (
      <div className="flex w-[80vw] items-center justify-center">
        <TagInput.Root onChange={onChange} {...args}>
          <TagInput.Icon key="icon" icon={<Envelope />} />
          <TagInput.Input
            key="input"
            type="email"
            placeholder="Digite vírgula para separar as tags"
            value={args.value}
            onChange={onChange}
          />
        </TagInput.Root>
      </div>
    )
  },
}
