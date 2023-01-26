import { Meta, StoryObj } from "@storybook/react";
import { Input, InputRootProps } from "@coaktion/visu";
import { Envelope } from "phosphor-react";

export default {
  title: "Components/Input",
  component: Input.Root,
  argTypes: {
    border: {
      options: ["error", "success"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<InputRootProps>;

export const Default: StoryObj<InputRootProps> = {
  args: {
    children: <Input.Input type="text" placeholder="Escreva seu nome aqui" />,
  },
};

export const WithIconLeft: StoryObj<InputRootProps> = {
  args: {
    children: (
      <>
        <Input.Icon position="left">
          <Envelope />
        </Input.Icon>
        <Input.Input type="email" placeholder="Escreva seu email aqui" />
      </>
    ),
  },
};

export const WithIconRight: StoryObj<InputRootProps> = {
  args: {
    children: (
      <>
        <Input.Icon position="right">
          <Envelope />
        </Input.Icon>
        <Input.Input type="email" placeholder="Escreva seu email aqui" />
      </>
    ),
  },
};
