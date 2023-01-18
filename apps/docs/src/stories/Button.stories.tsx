import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonRootProps } from "@coaktion/visu";
import { CheckCircle } from "phosphor-react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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

const play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByRole("button"));
};

export const Default: StoryObj<ButtonRootProps> = {
  args: {
    children: <>Clique aqui</>,
  },
  play,
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
  play,
};
