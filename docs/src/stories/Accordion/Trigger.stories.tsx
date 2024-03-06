import { Accordion, AccordionTriggerProps } from '@droz-js/visu'
import { Plus } from '@phosphor-icons/react'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<AccordionTriggerProps> = {
  title: 'Accordion/Trigger',
  component: Accordion.Trigger,
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
  },
  args: {
    children: undefined,
  },
} as Meta<AccordionTriggerProps>

export default meta
type AccordionTriggerStory = StoryObj<AccordionTriggerProps>

export const Comum: AccordionTriggerStory = {
  render: (args) => {
    return (
      <Accordion.Root type="single">
        <Accordion.Item value="default">
          <Accordion.Header>
            <span>Accordion</span>
            <Accordion.Trigger {...args} />
          </Accordion.Header>
          <Accordion.Content>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              dicta voluptas laudantium culpa, pariatur, excepturi modi animi
              amet eius voluptatibus nostrum aspernatur, nesciunt eos
              reprehenderit id magni officiis. Autem, placeat?
            </span>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    )
  },
}

export const OutroIcone: AccordionTriggerStory = {
  args: {
    children: <Plus />,
  },
  render: (args) => {
    return (
      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="default">
          <Accordion.Header>
            <span>Accordion</span>
            <Accordion.Trigger {...args} />
          </Accordion.Header>
          <Accordion.Content>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
              dicta voluptas laudantium culpa, pariatur, excepturi modi animi
              amet eius voluptatibus nostrum aspernatur, nesciunt eos
              reprehenderit id magni officiis. Autem, placeat?
            </span>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    )
  },
}
