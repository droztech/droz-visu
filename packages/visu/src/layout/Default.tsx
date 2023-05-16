import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { Terminal } from 'phosphor-react'
import { FC, HTMLAttributes, ReactNode } from 'react'

export interface LayoutDefaultProps extends HTMLAttributes<HTMLDivElement> {
  screenSize?: string
  asChild?: boolean
  theme?: 'light' | 'dark'
  terminal?: object
  buttons?: {
    icon: ReactNode
    onClick: (data?: unknown) => void
  }[]
}

const LayoutDefault: FC<LayoutDefaultProps> = ({
  theme = 'light',
  screenSize,
  asChild,
  terminal,
  children,
  className,
  buttons,
  style,
  ...rest
}) => {
  const Comp = asChild ? Slot : 'div'

  return (
    <div className="min-h-screen bg-[#272727] flex items-center justify-center">
      <div className="w-[90vw] min-w-[320px] max-w-5xl items-center justify-center flex-col gap-8 flex">
        <div className="flex gap-4 items-center w-full">
          {buttons?.map((item, index) => (
            <button
              key={index}
              className="p-2 rounded bg-gray-800 transition-colors hover:bg-gray-700 text-gray-100"
              onClick={item.onClick}
            >
              {item.icon}
            </button>
          ))}
        </div>
        <Comp
          className={clsx(
            'min-h-[50vh] rounded p-4 flex items-center justify-center flex-col gap-4 shadow-sm w-full overflow-auto relative',
            className,
            theme === 'light'
              ? 'bg-gray-100 text-gray-900'
              : 'bg-gray-800 text-gray-100 dark'
          )}
          style={{
            maxWidth: screenSize,
            ...style,
          }}
          {...rest}
        >
          {children}
        </Comp>
        {terminal && (
          <pre className="bg-gray-800  p-4 rounded text-gray-400 relative min-h-12 text-xs w-full">
            {JSON.stringify(terminal, null, 2)}
            <button
              className="absolute top-2 right-2 p-2 rounded bg-gray-800 transition-colors hover:bg-gray-700 border border-gray-700"
              onClick={() => console.log(terminal)}
            >
              <Terminal />
            </button>
          </pre>
        )}
      </div>
    </div>
  )
}

export default LayoutDefault
