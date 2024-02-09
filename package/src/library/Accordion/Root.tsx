import {
  AccordionMultipleProps,
  AccordionSingleProps,
  Root,
} from '@radix-ui/react-accordion'
import { FC, forwardRef } from 'react'

export type AccordionRootProps = AccordionSingleProps | AccordionMultipleProps

const AccordionRoot: FC<AccordionRootProps> = forwardRef<
  HTMLDivElement,
  AccordionRootProps
>(({ children, ...rest }, ref) => {
  return (
    <Root {...rest} ref={ref}>
      {children}
    </Root>
  )
})

AccordionRoot.displayName = 'Accordion.Root'

export default AccordionRoot
