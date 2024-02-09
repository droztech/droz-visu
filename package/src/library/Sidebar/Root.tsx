import { cn } from '@/src/utils/class-merge.helper'

import { Minus, Plus } from 'phosphor-react'
import { FC, HTMLAttributes } from 'react'

export interface SidebarRootProps extends HTMLAttributes<HTMLDivElement> {
  expanded?: boolean
  setExpanded?: () => void
}

const SidebarRoot: FC<SidebarRootProps> = ({
  children,
  className,
  expanded,
  setExpanded,
  ...rest
}) => {
  return (
    <aside
      className={cn(
        'sticky top-0 flex h-screen flex-col justify-between border-r border-gray-300 transition-all duration-300 [&_*]:overflow-hidden [&_*]:text-ellipsis [&_*]:whitespace-nowrap',
        expanded ? 'w-56 px-4' : 'w-14 px-2 [&_span]:hidden',
        className,
      )}
      {...rest}
    >
      {setExpanded && (
        <button
          className="transition-colors7 absolute -right-2.5 top-4 flex h-5 w-5 cursor-pointer items-center justify-center rounded border-2 border-gray-400 bg-gray-100 text-gray-500 hover:border-primary hover:bg-primary-100 hover:text-primary"
          onClick={setExpanded}
        >
          {expanded ? <Minus /> : <Plus />}
        </button>
      )}
      {children}
    </aside>
  )
}

SidebarRoot.displayName = 'Sidebar.Root'

export default SidebarRoot
