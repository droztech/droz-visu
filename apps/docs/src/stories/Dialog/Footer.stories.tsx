import { Button, Dialog, DialogFooterProps } from '@coaktion/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<DialogFooterProps> = {
  title: 'Dialog/Footer',
  component: Dialog.Footer,
  argTypes: {
    children: {
      control: 'none',
      description: 'Conteúdo a ser exibido no rodapé do Dialog aberto.',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      type: { name: 'other', required: true, value: 'React.ReactNode' },
    },
    align: {
      control: 'radio',
      description: 'Alinhamento do conteúdo do rodapé.',
      options: ['center', 'left', 'right'],
      table: {
        type: { summary: ['center', 'left', 'right'].join('|') },
        defaultValue: { summary: 'center' },
      },
      type: {
        name: 'enum',
        required: false,
        value: ['center', 'left', 'right'],
      },
    },
  },
  args: {
    children: '',
    align: 'center',
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
          <Dialog.Body />
          <Story />
        </Dialog.Content>
      </Dialog.Root>
    ),
  ],
} as Meta<DialogFooterProps>

export default meta
type DialogFooterStory = StoryObj<DialogFooterProps>

export const Comum: DialogFooterStory = {
  args: {
    children: <span>Dialog.Footer</span>,
  },
  render: (args) => {
    return <Dialog.Footer {...args}></Dialog.Footer>
  },
}

export const ComBotoesFinal: DialogFooterStory = {
  name: 'Com botões ao final',
  args: {
    align: 'right',
    children: [
      <Button.Root key="confirmar">Confirmar</Button.Root>,
      <Dialog.Close key="cancelar" asChild>
        <Button.Root ghost>Cancelar</Button.Root>
      </Dialog.Close>,
    ],
  },
  render: (args) => {
    return <Dialog.Footer {...args}></Dialog.Footer>
  },
}
