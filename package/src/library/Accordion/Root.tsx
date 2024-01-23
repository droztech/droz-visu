import { AccordionMultipleProps, AccordionSingleProps, Root } from '@radix-ui/react-accordion'
import { FC, Ref, forwardRef, useImperativeHandle, useRef } from 'react'

export type AccordionRootProps = AccordionSingleProps | AccordionMultipleProps

const AccordionRoot: FC<AccordionRootProps> = forwardRef<HTMLDivElement, AccordionRootProps>(
  ({ children, ...rest }, ref: Ref<HTMLDivElement | null>) => {
    const elementRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => elementRef.current)

    return (
      <Root {...rest} ref={elementRef}>
        {children}
      </Root>
    )
  },
)

AccordionRoot.displayName = 'Accordion.Root'

export default AccordionRoot
