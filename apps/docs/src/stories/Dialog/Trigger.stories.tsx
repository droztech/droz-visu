import { Button, Dialog, DialogTriggerProps } from '@coaktion/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<DialogTriggerProps> = {
  title: 'Dialog/Trigger',
  component: Dialog.Trigger,
  argTypes: {
    children: {
      control: 'none',
      description: 'Conteúdo que irá abrir o Dialog ao receber o clique.',
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
        defaultValue: { summary: true },
      },
      type: { name: 'boolean', required: false },
    },
  },
  args: {
    children: '',
    asChild: true,
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
        <Story />

        <Dialog.Content></Dialog.Content>
      </Dialog.Root>
    ),
  ],
} as Meta<DialogTriggerProps>

export default meta
type DialogTriggerStory = StoryObj<DialogTriggerProps>

export const Comum: DialogTriggerStory = {
  args: {
    children: <Button.Root>Dialog Trigger</Button.Root>,
  },
  render: (args) => {
    return <Dialog.Trigger {...args}></Dialog.Trigger>
  },
}

export const TextTrigger: DialogTriggerStory = {
  name: 'Texto como trigger',
  args: {
    children: <span>Dialog Trigger</span>,
  },
  render: (args) => {
    return <Dialog.Trigger {...args}></Dialog.Trigger>
  },
}
