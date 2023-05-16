import { Meta, StoryObj } from '@storybook/react'
import { Question } from 'phosphor-react'
import { withDesign } from 'storybook-addon-designs'

import { Checkbox, CheckboxIndicatorProps } from '@coaktion/visu'

const meta: Meta<CheckboxIndicatorProps> = {
  title: 'Checkbox/Indicator',
  component: Checkbox.Indicator,
  decorators: [withDesign],
  argTypes: {
    children: {
      control: 'none',
      description:
        'Recebe um ícone como filho para modificar o ícone padrão. Caso nenhum filho seja passado, o ícone padrão é utilizado. É necessário passar o ícone para os casos de checkbox com estado indeterminado.',
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/cUmiZr1GhrB9HsRCuOJ0S2/%5BDroz-Nexo%5D-Library?type=design&node-id=3107-18146&t=i2mg4ixu1iYnYf6w-0',
      allowFullscreen: true,
    },
  },
}

export default meta
type CheckboxIndicatorStory = StoryObj<CheckboxIndicatorProps>

export const Comum: CheckboxIndicatorStory = {
  render: (args) => {
    return (
      <Checkbox.Root checked>
        <Checkbox.Indicator {...args} />
      </Checkbox.Root>
    )
  },
}

export const Indeterminado: CheckboxIndicatorStory = {
  render: (args) => {
    return (
      <Checkbox.Root checked="indeterminate">
        <Checkbox.Indicator {...args}>
          <Question />
        </Checkbox.Indicator>
      </Checkbox.Root>
    )
  },
}
