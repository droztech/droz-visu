import { fireEvent, render, screen } from '@testing-library/react'

import { Input } from '@coaktion/visu'

describe('Input tests', () => {
  const inputEmail = 'email@email.com'

  it('Should render a input', () => {
    render(
      <Input.Root data-testid="element">
        <Input.Input />
      </Input.Root>
    )
    const element = screen.getByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should write on input', () => {
    render(
      <Input.Root data-testid="element">
        <Input.Input />
      </Input.Root>
    )
    const element = screen.getByTestId('element')

    fireEvent.change(element.firstChild as Element, {
      target: { value: inputEmail },
    })
    expect(element.firstChild).toHaveValue(inputEmail)
  })

  // it("Should select input on icon click", () => {
  //   render(
  //     <Input.Root data-testid="element">
  //       <Input.Icon>
  //         <Envelope />
  //       </Input.Icon>
  //       <Input.Input data-testid="input" />
  //     </Input.Root>
  //   );
  //   const element = screen.getByTestId("element");

  //   fireEvent.click(element.firstChild as Element);
  //   expect(screen.getByTestId("input")).toHaveFocus();
  // });
})
