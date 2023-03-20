import FlexRootV2, { FlexRootV2Props } from './Root'

export interface FlexRowProps extends Omit<FlexRootV2Props, 'direction'> {}

const FlexRow = ({ children, ...rest }: FlexRowProps) => {
  return (
    <FlexRootV2 direction="row" {...rest}>
      {children}
    </FlexRootV2>
  )
}

FlexRow.displayName = 'Flex.Row'

export default FlexRow
