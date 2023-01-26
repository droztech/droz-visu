import { Input } from "@coaktion/visu";
import { fireEvent, render, screen } from "@testing-library/react";
import { Envelope } from "phosphor-react";

describe("Input tests", () => {
  const inputEmail = "email@email.com";

  it("Should render a input", () => {
    const { container } = render(
      <Input.Root>
        <Input.Input />
      </Input.Root>
    );
    const element = container.firstChild as Element;

    expect(element).toBeDefined();
  });

  it("Should write on input", () => {
    const { container } = render(
      <Input.Root>
        <Input.Input />
      </Input.Root>
    );
    const element = container.firstChild as Element;

    fireEvent.change(element.firstChild as Element, {
      target: { value: inputEmail },
    });
    expect(element.firstChild).toHaveValue(inputEmail);
  });

  // it("Should select input on icon click", () => {
  //   const { container } = render(
  //     <Input.Root>
  //       <Input.Icon>
  //         <Envelope />
  //       </Input.Icon>
  //       <Input.Input data-testid="input" />
  //     </Input.Root>
  //   );
  //   const element = container.firstChild as Element;

  //   fireEvent.click(element.firstChild as Element);
  //   expect(screen.getByTestId("input")).toHaveFocus();
  // });
});
