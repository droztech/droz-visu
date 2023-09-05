import { Button, Dialog, DialogCloseProps } from '@coaktion/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<DialogCloseProps> = {
  title: 'Dialog/Close',
  component: Dialog.Close,
  argTypes: {
    children: {
      control: 'none',
      description:
        'Elemento que será exibido dentro do botão de fechar. <b>Caso queira passar um botão, lembre de passar asChild como true</b>.',
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
        'Ao passar essa propriedade com o valor true, o componente irá se transformar no componente filho. É obrigatório passar um children ao utilizar essa propriedade. <b>Verifique a tag ao inspecionar o componente na DOM. Caso o children seja um botão é preciso passar o asChild como true</b>.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    children: <span>Fechar Dialog</span>,
    asChild: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/(Global)-Droz-Design-System?type=design&node-id=4625-2063&mode=design&t=eYqgLWw8loUHfxvB-0',
      allowFullscreen: true,
    },
  },
  decorators: [
    (Story) => (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Button.Root>Dialog</Button.Root>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Footer>
            <Story />
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    ),
  ],
} as Meta<DialogCloseProps>

export default meta
type DialogCloseStory = StoryObj<DialogCloseProps>

export const Comum: DialogCloseStory = {
  render: (args) => {
    return <Dialog.Close {...args}></Dialog.Close>
  },
}

export const ComoTexto: DialogCloseStory = {
  name: 'Como texto',
  args: {
    asChild: true,
  },
  render: (args) => {
    return <Dialog.Close {...args}></Dialog.Close>
  },
}

export const BotaoComoFilho: DialogCloseStory = {
  name: 'Botão como filho',
  args: {
    asChild: true,
    children: (
      <Button.Root variant="secondary" ghost>
        Fechar
      </Button.Root>
    ),
  },
  render: (args) => {
    return <Dialog.Close {...args}></Dialog.Close>
  },
}
