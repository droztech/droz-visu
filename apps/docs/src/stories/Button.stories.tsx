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

export const Default: StoryObj<ButtonRootProps> = {
  args: {
    children: <>Clique aqui</>,
  },
  play: ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const screen = within(canvasElement);

    expect(screen.getByRole("button")).toBeVisible;
    expect(screen.getByRole("button")).toHaveTextContent("Clique aqui");

    userEvent.click(screen.getByRole("button"));
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
  play: ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const screen = within(canvasElement);

    expect(screen.getByRole("button")).toBeVisible;
    expect(screen.getByRole("button")).toHaveTextContent("Clique aqui");
    expect(screen.getByRole("button")).toContainHTML("svg");

    userEvent.click(screen.getByRole("button"));
  },
};
