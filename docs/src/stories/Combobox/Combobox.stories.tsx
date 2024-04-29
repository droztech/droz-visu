import { Combobox, ComboboxRootProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<ComboboxRootProps> = {
  title: 'Combobox/Combobox',
  component: Combobox.Root,
  argTypes: {
    children: {
      control: 'none',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
      type: { name: 'other', required: false, value: 'React.ReactNode' },
    },
    placeholder: {
      control: 'text',
      description: 'Aplica o placeholder em ComboboxCombobox',
      table: {
        type: { summary: 'text' },
      },
      type: { name: 'string', required: false },
    },
  },
  args: {
    children: '',
    placeholder: 'Selecione uma opção',
  },
} as Meta<ComboboxRootProps>

export default meta
type ComboboxRootStory = StoryObj<ComboboxRootProps>

const list = [
  { value: 't1', label: 'Teste 1' },
  { value: 't2', label: 'Teste 2' },
  { value: 't3', label: 'Teste 3' },
  { value: 't4', label: 'Teste 4' },
]

export const Comum: ComboboxRootStory = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [test, setTest] = useState<string>()

    return (
      <Combobox.Root
        value={list.find((item) => item.value === test)?.label}
        className="w-64"
        {...args}
      >
        <Combobox.Input placeholder="Pesquise uma opção" />
        <Combobox.List>
          <Combobox.Empty>Vazio</Combobox.Empty>
          {list.map(({ label, value }) => (
            <Combobox.Item
              key={value}
              onSelect={() => setTest(value)}
              selected={test === value}
            >
              {label}
            </Combobox.Item>
          ))}
        </Combobox.List>
      </Combobox.Root>
    )
  },
}
