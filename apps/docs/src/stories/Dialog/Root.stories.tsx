import { Button, Dialog, DialogRootProps } from '@coaktion/visu'
import { useArgs } from '@storybook/preview-api'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<DialogRootProps> = {
  title: 'Dialog/Root',
  component: Dialog.Root,
  argTypes: {
    children: {
      control: 'none',
      description: 'Estrutura do Dialog.',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      type: { name: 'other', required: true, value: 'React.ReactNode' },
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Define se o Dialog deve iniciar aberto ou fechado.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      type: { name: 'boolean', required: false },
    },
    modal: {
      control: 'boolean',
      description:
        'Quando o Dialog está aberto remove a interação com conteúdos de trás. Somente o conteúdo do Dialog ficará visível para os leitores de tela.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      type: { name: 'boolean', required: false },
    },
    open: {
      control: 'boolean',
      description: 'Define se o conteúdo do Dialog está visível ou não.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      type: { name: 'boolean', required: false },
    },

    onOpenChange: {
      control: 'none',
      description: 'Callback executado quando o estado de `open` é alterado.',
      table: {
        type: { summary: 'function' },
      },
      type: { name: 'function', required: false },
    },
  },
  args: {
    children: '',
    defaultOpen: false,
    modal: true,
    open: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/(Global)-Droz-Design-System?type=design&node-id=4625-2063&mode=design&t=eYqgLWw8loUHfxvB-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type DialogRootStory = StoryObj<DialogRootProps>

export const Default: DialogRootStory = {
  args: {
    children: [
      <Dialog.Trigger key={''}>
        <Button.Root>Modal</Button.Root>
      </Dialog.Trigger>,

      <Dialog.Content key={''}></Dialog.Content>,
    ],
  },
  render: ({ onOpenChange, ...args }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [, updateArgs] = useArgs()

    onOpenChange = (open: boolean) => {
      updateArgs({ open })
    }

    return <Dialog.Root onOpenChange={onOpenChange} {...args} />
  },
}
