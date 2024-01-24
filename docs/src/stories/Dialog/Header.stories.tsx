import { Button, Dialog, DialogHeaderProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'
import { Alien, SquaresFour, X } from 'phosphor-react'

const meta: Meta<DialogHeaderProps> = {
  title: 'Dialog/Header',
  component: Dialog.Header,
  argTypes: {
    title: {
      control: 'text',
      description: 'Título do Dialog.',
      table: {
        type: { summary: 'string' },
      },
      type: { name: 'string', required: true },
    },

    closeIcon: {
      control: 'none',
      description: 'Ícone para o botão de fechar.',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
        defaultValue: { summary: '{ X } from phosphor-react' },
      },
      type: { name: 'other', required: false, value: 'React.ReactNode' },
    },
    titleIcon: {
      control: 'none',
      description: 'Ícone para o título. É exibido a esquerda do texto do título.',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      type: { name: 'other', required: false, value: 'React.ReactNode' },
    },
    withClose: {
      control: 'boolean',
      description: 'Define se o botão de fechar será exibido.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    title: 'Título do Dialog',
    closeIcon: <X />,
    titleIcon: <SquaresFour />,
    withClose: true,
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
          <Story />
        </Dialog.Content>
      </Dialog.Root>
    ),
  ],
} as Meta<DialogHeaderProps>

export default meta
type DialogHeaderStory = StoryObj<DialogHeaderProps>

export const Comum: DialogHeaderStory = {
  render: (args) => {
    return <Dialog.Header {...args}></Dialog.Header>
  },
}

export const ApenasTexto: DialogHeaderStory = {
  name: 'Apenas texto',
  args: {
    withClose: false,
    titleIcon: null,
  },
  render: (args) => {
    return <Dialog.Header {...args}></Dialog.Header>
  },
}

export const IconeDiferente: DialogHeaderStory = {
  name: 'Icone do botão de fechar diferente',
  args: {
    closeIcon: <Alien />,
    titleIcon: null,
  },
  render: (args) => {
    return <Dialog.Header {...args}></Dialog.Header>
  },
}
