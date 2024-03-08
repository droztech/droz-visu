import { TagInput, TagInputIconProps } from '@droz-js/visu'
import { Envelope, SquaresFour } from '@phosphor-icons/react'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<TagInputIconProps> = {
  title: 'TagInput/Icon',
  component: TagInput.Icon,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Desabilita o ícone',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
    icon: {
      control: 'text',
      description: 'Aplica o icon em TagInputIcon',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: true },
    },
  },
  args: {
    disabled: false,
    icon: <SquaresFour />,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3119-16270&t=AdZjH6UtpERmhB5O-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type TagInputIconStory = StoryObj<TagInputIconProps>

export const Comum: TagInputIconStory = {
  render: (args) => {
    return (
      <TagInput.Icon {...args}>
        <Envelope />
      </TagInput.Icon>
    )
  },
}

export const ComAcaoDeClique: TagInputIconStory = {
  argTypes: {
    onClick: {
      action: 'clicked',
      description: 'Define o evento de click',
      table: { type: { summary: 'function' } },
    },
  },
  render: (args) => {
    return (
      <TagInput.Icon {...args} onClick={() => {}}>
        <Envelope />
      </TagInput.Icon>
    )
  },
}
