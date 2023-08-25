import { Button, Dialog, DialogContentProps } from '@coaktion/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<DialogContentProps> = {
  title: 'Dialog/Content',
  component: Dialog.Content,
  argTypes: {
    children: {
      control: 'none',
      description: 'Conteúdo que será exibido com o Dialog aberto.',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      type: { name: 'other', required: true, value: 'React.ReactNode' },
    },
    asChild: {
      control: 'boolean',
      description:
        'Ao passar essa propriedade com o valor true, o componente irá se transformar no componente filho. É obrigatório passar um children ao utilizar essa propriedade. <b>Verifique a tag ao inspecionar o componente na DOM</b>.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },

    onOpenAutoFocus: {
      control: 'none',
      description:
        'Evento executado quando o Dialog.Content recebe o foco após ser aberto. Pode ser previnido ao chamar `event.preventDefault`.',
      table: {
        type: { summary: 'function' },
      },
      type: { name: 'function', required: false },
    },
    onCloseAutoFocus: {
      control: 'none',
      description:
        'Evento executado quando o Dialog.Trigger recebe o foco após fechar o Dialog.Content. Pode ser previnido ao chamar `event.preventDefault`.',
      table: {
        type: { summary: 'function' },
      },
      type: { name: 'function', required: false },
    },
    onEscapeKeyDown: {
      control: 'none',
      description:
        'Evento executado quando a tecla escape é pressionada. Pode ser previnido ao chamar `event.preventDefault`.',
      table: {
        type: { summary: 'function' },
      },
      type: { name: 'function', required: false },
    },
    onPointerDownOutside: {
      control: 'none',
      description:
        'Evento executado quando um pointer event acontece fora da área do componente Dialog. Pode ser previnido ao chamar `event.preventDefault`.',
      table: {
        type: { summary: 'function' },
      },
      type: { name: 'function', required: false },
    },
    onInteractOutside: {
      control: 'none',
      description:
        'Evento executado quando um evento(pointer ou focus) acontece fora da área do componente Dialog. Pode ser previnido ao chamar `event.preventDefault`.',
      table: {
        type: { summary: 'function' },
      },
      type: { name: 'function', required: false },
    },
  },
  args: {
    children: '',
    asChild: false,
  },
  decorators: [
    (Story) => (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button.Root>Dialog</Button.Root>
        </Dialog.Trigger>
        <Story />
      </Dialog.Root>
    ),
  ],
} as Meta<DialogContentProps>

export default meta
type DialogContentStory = StoryObj<DialogContentProps>

export const Comum: DialogContentStory = {
  render: (args) => {
    return <Dialog.Content {...args}>Dialog.Content</Dialog.Content>
  },
}
