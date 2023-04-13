import * as RadixToast from '@radix-ui/react-toast'
import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'

import ToastRoot, { ToastRootProps } from '../ToastRoot'

export interface AbcContextProps extends RadixToast.ToastProviderProps {
  // posX: 'left' | 'right'
  // posY: 'top' | 'bottom'
  toast: (data: ToastRootProps) => void
}

export const AbcContext = createContext<AbcContextProps>({} as AbcContextProps)

export const AbcProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<ToastRootProps[]>([])

  const toast = useCallback(
    (data: ToastRootProps) => {
      console.log(messages)
      setMessages([...messages, data])
    },
    [messages, setMessages]
  )

  return (
    <AbcContext.Provider
      value={{
        toast,
      }}
    >
      <RadixToast.Provider>
        {children}
        {messages.map((item, index) => (
          <ToastRoot
            key={index}
            variant={item.variant}
            title={item.title}
            desc={item.desc}
          />
        ))}
        <RadixToast.Viewport className="fixed z-50 p-2 flex flex-col-reverse gap-2 max-h-44 overflow-auto scrollbar-hide right-0 bottom-0" />
      </RadixToast.Provider>
    </AbcContext.Provider>
  )
}

export const useAbcContext = (): AbcContextProps => {
  const context = useContext(AbcContext)

  if (context === undefined) {
    throw new Error('Context should be used under a provider')
  }

  return context
}
