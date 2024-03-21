import { Popover } from '@library'

import { render, screen } from '@testing-library/react'
// eslint-disable-next-line import/no-named-as-default
import userEvent from '@testing-library/user-event'

describe('Popover tests', () => {
  it('Should render a Popover component with icon', () => {
    render(<Popover icon={<span>Icon</span>} />)
    const iconElement = screen.getByText('Icon')
    expect(iconElement).toBeInTheDocument()
  })

  it('Should trigger popover when clicked on icon', async () => {
    render(
      <Popover icon={<span>Icon</span>}>
        <div>Children</div>
      </Popover>,
    )
    const iconElement = screen.getByText('Icon')
    userEvent.click(iconElement)
    const popoverContent = await screen.findByText('Children')
    expect(popoverContent).toBeInTheDocument()
  })
})
