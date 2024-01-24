import { Accordion, AccordionRootProps } from '@droz-js/visu'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<AccordionRootProps> = {
  title: 'Accordion/Root',
  component: Accordion.Root,
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
    collapsible: {
      control: 'boolean',
      description: 'Aplica o collapsible em AccordionRoot',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      type: { name: 'string', required: false },
      defaultValue: false,
    },
    type: {
      control: 'radio',
      description: 'Aplica o type em AccordionRoot',
      options: ['single', 'multiple'] as AccordionRootProps['type'][],
      table: {
        type: {
          summary: [''].join('|'),
        },
      },
      type: { name: 'string', required: true },
    },
  },
  args: {
    children: '',
    collapsible: true,
  },
} as Meta<AccordionRootProps>

export default meta
type AccordionRootStory = StoryObj<AccordionRootProps>

export const Single: AccordionRootStory = {
  args: {
    type: 'single',
  },
  render: (args: AccordionRootProps) => {
    return (
      <Accordion.Root {...args}>
        <Accordion.Item value="default1">
          <Accordion.Header>
            <span>Accordion</span>
            <Accordion.Trigger />
          </Accordion.Header>
          <Accordion.Content>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod dicta voluptas laudantium culpa, pariatur,
              excepturi modi animi amet eius voluptatibus nostrum aspernatur, nesciunt eos reprehenderit id magni
              officiis. Autem, placeat?
            </span>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="default2">
          <Accordion.Header>
            <span>Accordion</span>
            <Accordion.Trigger />
          </Accordion.Header>
          <Accordion.Content>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod dicta voluptas laudantium culpa, pariatur,
              excepturi modi animi amet eius voluptatibus nostrum aspernatur, nesciunt eos reprehenderit id magni
              officiis. Autem, placeat?
            </span>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="default3">
          <Accordion.Header>
            <span>Accordion</span>
            <Accordion.Trigger />
          </Accordion.Header>
          <Accordion.Content>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod dicta voluptas laudantium culpa, pariatur,
              excepturi modi animi amet eius voluptatibus nostrum aspernatur, nesciunt eos reprehenderit id magni
              officiis. Autem, placeat?
            </span>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    )
  },
}

export const Multiple: AccordionRootStory = {
  args: {
    type: 'multiple',
  },
  render: (args: AccordionRootProps) => {
    return (
      <Accordion.Root {...args}>
        <Accordion.Item value="default1">
          <Accordion.Header>
            <span>Accordion</span>
            <Accordion.Trigger />
          </Accordion.Header>
          <Accordion.Content>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod dicta voluptas laudantium culpa, pariatur,
              excepturi modi animi amet eius voluptatibus nostrum aspernatur, nesciunt eos reprehenderit id magni
              officiis. Autem, placeat?
            </span>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="default2">
          <Accordion.Header>
            <span>Accordion</span>
            <Accordion.Trigger />
          </Accordion.Header>
          <Accordion.Content>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod dicta voluptas laudantium culpa, pariatur,
              excepturi modi animi amet eius voluptatibus nostrum aspernatur, nesciunt eos reprehenderit id magni
              officiis. Autem, placeat?
            </span>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="default3">
          <Accordion.Header>
            <span>Accordion</span>
            <Accordion.Trigger />
          </Accordion.Header>
          <Accordion.Content>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod dicta voluptas laudantium culpa, pariatur,
              excepturi modi animi amet eius voluptatibus nostrum aspernatur, nesciunt eos reprehenderit id magni
              officiis. Autem, placeat?
            </span>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    )
  },
}
