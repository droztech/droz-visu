import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonRootProps } from "@coaktion/visu";
import { CheckCircle } from "phosphor-react";

export default {
  title: "Components/Button",
  component: Button.Root,
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
      defaultValue: "md",
    },
    ghost: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta<ButtonRootProps>;

export const Default: StoryObj<ButtonRootProps> = {
  args: {
    children: <>Clique aqui</>,
  },
};

export const WithIcon: StoryObj<ButtonRootProps> = {
  args: {
    children: (
      <>
        <Button.Icon>
          <CheckCircle />
        </Button.Icon>
        Clique aqui
      </>
    ),
  },
};
