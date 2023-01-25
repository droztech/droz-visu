import { Button } from "@coaktion/visu";
import { fireEvent, render } from "@testing-library/react";
import { CheckCircle } from "phosphor-react";

describe("Button tests", () => {
  const buttonText = "Clique aqui";
  const buttonClick = jest.fn();

  it("Should render a button", () => {
    const { container } = render(<Button.Root>{buttonText}</Button.Root>);
    const element = container.firstChild as Element;

    expect(element).toBeDefined();
  });

  it("Should render a button with correct text", () => {
    const { container } = render(<Button.Root>{buttonText}</Button.Root>);
    const element = container.firstChild as Element;

    expect(element).toHaveTextContent(buttonText);
  });

  it("Should render a button with JSX element", () => {
    const { container } = render(
      <Button.Root>
        <span>{buttonText}</span>
      </Button.Root>
    );
    const element = container.firstChild as Element;

    expect(element.firstElementChild?.tagName).toBe("SPAN");
    expect(element.firstElementChild).toHaveTextContent(buttonText);
  });

  it("Should render a button with icon and text", () => {
    const { container } = render(
      <Button.Root>
        <Button.Icon>
          <CheckCircle />
        </Button.Icon>
        {buttonText}
      </Button.Root>
    );
    const element = container.firstChild as Element;

    expect(element.firstElementChild?.firstElementChild?.tagName).toBe("svg");
  });

  it("Should render a button with size styles", () => {
    const { container } = render(<Button.Root ghost>{buttonText}</Button.Root>);
    const element = container.firstChild as Element;
  });

  it("Should render a button with ghost style", () => {
    const { container } = render(<Button.Root ghost>{buttonText}</Button.Root>);
    const element = container.firstChild as Element;
  });

  it("Should render a button with disabled style and unable to click", () => {
    const { container } = render(
      <Button.Root disabled>{buttonText}</Button.Root>
    );
    const element = container.firstChild as Element;

    fireEvent.click(element);
    expect(buttonClick).toHaveBeenCalledTimes(0);
  });

  it("Should render a button with onClick", () => {
    const { container } = render(
      <Button.Root onClick={buttonClick}>{buttonText}</Button.Root>
    );
    const element = container.firstChild as Element;

    fireEvent.click(element);
    expect(buttonClick).toHaveBeenCalledTimes(1);
  });
});
