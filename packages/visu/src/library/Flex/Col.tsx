import FlexRoot, { FlexRootProps } from './Root'

export interface FlexColProps extends Omit<FlexRootProps, 'direction'> {}

const FlexCol = ({ children, ...rest }: FlexColProps) => {
  return (
    <FlexRoot direction="col" {...rest}>
      {children}
    </FlexRoot>
  )
}

FlexCol.displayName = 'Flex.Col'

export default FlexCol
