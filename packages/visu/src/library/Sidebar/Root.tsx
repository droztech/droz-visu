import { clsx } from 'clsx'
import { Minus, Plus } from 'phosphor-react'
import { FC, HTMLAttributes, useState } from 'react'

export interface SidebarRootProps extends HTMLAttributes<HTMLDivElement> {}

const SidebarRoot: FC<SidebarRootProps> = ({ children, ...rest }) => {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div
      className={clsx(
        'sticky top-0 flex h-screen flex-col border-r border-gray-300 bg-gray-100 py-6 transition-all duration-300 [& span]:bg-error-500',
        isExpanded ? 'w-56 px-4' : 'w-14 px-2',
        rest.className
      )}
      {...rest}
    >
      <div
        className={clsx(
          'flex items-center justify-center absolute -right-2.5 top-4 w-5 h-5 border-2 rounded cursor-pointer transition-colors',
          'text-gray-500 bg-gray-100 border-gray-400',
          'hover:text-primary hover:bg-primary-100 hover:border-primary'
        )}
        onClick={() => {
          setIsExpanded(!isExpanded)
        }}
      >
        {isExpanded ? <Minus /> : <Plus />}
      </div>
      {children}
    </div>
  )
}

export default SidebarRoot
