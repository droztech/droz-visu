import { Skeleton } from '@library'
import { render, screen } from '@testing-library/react'
import clsx from 'clsx'

jest.mock('clsx', () => {
  return {
    clsx: jest.fn().mockImplementation(() => clsx),
  }
})

describe('SkeletonSkeleton tests', () => {
  it('Should render a SkeletonSkeleton element', () => {
    render(<Skeleton data-testid="element" />)
    const element = screen.queryByTestId('element')

    expect(element).toBeDefined()
  })

  it('Should render a SkeletonSkeleton element n-times', () => {
    render(
      <div data-testid="element">
        <Skeleton repeat={4} />
      </div>,
    )
    const element = screen.queryByTestId('element')

    expect(element?.children.length).toBe(4)
  })
})
