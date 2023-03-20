import FlexRoot, { FlexRootProps } from './Root'

export interface FlexRowProps extends Omit<FlexRootProps, 'direction'> {}

const FlexRow = ({ children, ...rest }: FlexRowProps) => {
  return (
    <FlexRoot direction="row" {...rest}>
      {children}
    </FlexRoot>
  )
}

FlexRow.displayName = 'Flex.Row'

export default FlexRow
