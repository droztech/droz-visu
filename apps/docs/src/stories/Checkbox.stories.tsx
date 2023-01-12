import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Checkbox } from "compoaktion";

export default {
  title: "Components/Checkbox",
  component: Checkbox.Root,
} as ComponentMeta<typeof Checkbox.Root>;

const Template: ComponentStory<typeof Checkbox.Root> = (args) => {
  return <Checkbox.Root {...args}></Checkbox.Root>;
};

export const Default = Template.bind({});
Default.args = {
  children: <Checkbox.Indicator />,
};
