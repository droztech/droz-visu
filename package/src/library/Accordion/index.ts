import AccordionContent from './Content'
import AccordionHeader from './Header'
import AccordionItem from './Item'
import AccordionRoot from './Root'
import AccordionTrigger from './Trigger'

export type { AccordionContentProps } from './Content'
export type { AccordionHeaderProps } from './Header'
export type { AccordionItemProps } from './Item'
export type { AccordionRootProps } from './Root'
export type { AccordionTriggerProps } from './Trigger'

const Accordion = {
  Content: AccordionContent,
  Header: AccordionHeader,
  Item: AccordionItem,
  Root: AccordionRoot,
  Trigger: AccordionTrigger,
}

export default Accordion
