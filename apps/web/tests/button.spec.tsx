import { Button } from "@coaktion/visu";
import { render, screen } from "@testing-library/react";

describe("Button tests", () => {
  it("Should render a button", () => {
    render(<Button.Root>Clique aqui</Button.Root>);

    expect(screen.getByRole("button")).toBeDefined();
    expect(screen.getByRole("button").textContent).toBe("Oi");
  });
});
