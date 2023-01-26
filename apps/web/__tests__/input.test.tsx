import { Input } from "@coaktion/visu";
import { render } from "@testing-library/react";
import { Envelope, Info } from "phosphor-react";

describe("Input tests", () => {
  const inputEmail = "email@email.com";
  const inputName = "email@email.com";

  it("Should render a Input", () => {
    const { container } = render(
      <Input.Root>
        <Input.Input />
      </Input.Root>
    );
    const element = container.firstChild as Element;

    expect(element).toBeDefined();
  });
});
