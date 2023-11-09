import TabsContent from './Content'
import TabsList from './List'
import TabsRoot from './Root'
import TabsTrigger from './Trigger'

export type { TabsContentProps } from './Content'
export type { TabsListProps } from './List'
export type { TabsRootProps } from './Root'
export type { TabsTriggerProps } from './Trigger'

const Tabs = {
  Content: TabsContent,
  List: TabsList,
  Root: TabsRoot,
  Trigger: TabsTrigger,
}

export default Tabs
