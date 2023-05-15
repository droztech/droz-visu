import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { Moon, Sun } from 'phosphor-react'
import { FC, HTMLAttributes, ReactNode, useState } from 'react'

export interface LayoutDefaultProps extends HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
  buttons?: {
    icon: ReactNode
    onClick: (data?: unknown) => void
  }[]
}

const LayoutDefault: FC<LayoutDefaultProps> = ({
  asChild,
  children,
  className,
  buttons,
  ...rest
}) => {
  const Comp = asChild ? Slot : 'div'

  const [theme, setTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('visuDevTheme') as 'light' | 'dark') ?? 'light'
  )

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('visuDevTheme', newTheme)
  }

  return (
    <div className="min-h-screen bg-[#272727] flex items-center justify-center">
      <div className="w-[90vw] min-w-[320px] max-w-5xl items-stretch justify-center flex-col gap-8 flex">
        <div className="flex gap-4 items-center">
          <button
            className="p-2 rounded bg-gray-700 transition-colors hover:bg-gray-800 text-gray-100"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
          {buttons?.map((item, index) => (
            <button
              key={index}
              className="p-2 rounded bg-gray-700 transition-colors hover:bg-gray-800 text-gray-100"
              onClick={item.onClick}
            >
              {item.icon}
            </button>
          ))}
        </div>
        <Comp
          className={clsx(
            'min-h-[50vh] rounded p-16 flex items-center justify-center flex-col gap-4 shadow-sm',
            className,
            theme === 'light'
              ? 'bg-gray-100 text-gray-900'
              : 'bg-gray-800 text-gray-100 dark'
          )}
          {...rest}
        >
          {/* ========================= TEST AREA ========================= */}
          {children}
          {/* ========================= TEST AREA ========================= */}
        </Comp>
        {/* {isShowingTerminal && (
          <pre className="bg-gray-700 py-2 px-4 rounded text-gray-100 relative min-h-12 text-sm mx-2">
            {JSON.stringify(watch(), null, 2)}
            <button
              className="absolute top-2 right-2 p-2 rounded bg-gray-800 transition-colors hover:bg-gray-900"
              onClick={() => console.log(getValues())}
            >
              <Terminal />
            </button>
          </pre>
        )} */}
      </div>
    </div>
  )
}

export default LayoutDefault
