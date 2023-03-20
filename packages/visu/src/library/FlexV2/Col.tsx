import FlexRootV2, { FlexRootV2Props } from './Root'

export interface FlexColProps extends Omit<FlexRootV2Props, 'direction'> {}

const FlexCol = ({ children, ...rest }: FlexColProps) => {
  return (
    <FlexRootV2 direction="col" {...rest}>
      {children}
    </FlexRootV2>
  )
}

FlexCol.displayName = 'Flex.Col'

export default FlexCol
