import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonRootProps } from "@coaktion/visu";
import { CheckCircle } from "phosphor-react";
import { within, userEvent } from "@storybook/testing-library";
import { render, screen } from "@testing-library/react";
import { expect, jest } from "@storybook/jest";

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
  args: {
    onClick: () => console.log("click"),
  },
} as Meta<ButtonRootProps>;

export const Default: StoryObj<ButtonRootProps> = {
  args: {
    children: <>Clique aqui</>,
  },
  play: () => {
    const test = render(
      <Button.Root
        ghost
        onClick={() => console.log("click")}
        data-testid="element"
      >
        Teste
      </Button.Root>
    );

    const element = screen.getByTestId("element");
    const logSpy = jest.spyOn(global.console, "log");

    expect(element).toBeVisible;
    expect(element).toHaveStyle("background-color: rgba(0, 0, 0, 0)");
    expect(element).toHaveTextContent("Teste");

    userEvent.click(element);
    expect(logSpy).toHaveBeenCalledWith("click");

    test.unmount();
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
    const logSpy = jest.spyOn(global.console, "log");

    expect(screen.getByRole("button")).toBeVisible;
    expect(screen.getByRole("button")).toHaveTextContent("Clique aqui");
    expect(screen.getByRole("button")).toContainHTML("svg");

    userEvent.click(screen.getByRole("button"));
    expect(logSpy).toHaveBeenCalledWith("click");
  },
};
