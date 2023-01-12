import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "lib";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div>
    <Button {...args}>Sou um botão</Button>
  </div>
);

export const Default = Template.bind({});
