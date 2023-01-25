import { Text } from "@coaktion/visu";
import { fireEvent, render } from "@testing-library/react";
import { Info } from "phosphor-react";

describe("Text tests", () => {
  const textText = "Hello World";
  const textClick = jest.fn();

  it("Should render a text", () => {
    const { container } = render(<Text>{textText}</Text>);
    const element = container.firstChild as Element;

    expect(element).toBeDefined();
  });

  it("Should render a correct text", () => {
    const { container } = render(<Text>{textText}</Text>);
    const element = container.firstChild as Element;

    expect(element).toHaveTextContent(textText);
  });

  it("Should render a different tag text", () => {
    const { container } = render(<Text as="h1">{textText}</Text>);
    const element = container.firstChild as Element;

    expect(element.tagName).toBe("H1");
  });

  it("Should render a text with onClick", () => {
    const { container } = render(
      <Text link="primary" onClick={textClick}>
        {textText}
      </Text>
    );
    const element = container.firstChild as Element;

    fireEvent.click(element);
    expect(textClick).toHaveBeenCalledTimes(1);
  });

  it("Should render a text with image", () => {
    const { container } = render(
      <Text color="alert400">
        <Info />
        {textText}
      </Text>
    );
    const element = container.firstChild as Element;

    expect(element.firstElementChild?.tagName).toBe("svg");
  });
});
