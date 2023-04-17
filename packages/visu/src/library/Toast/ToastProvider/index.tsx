import * as RadixToast from '@radix-ui/react-toast'
import { clsx } from 'clsx'
import {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'

import ToastRoot, { ToastRootProps } from '../ToastRoot'
import { posXVariants, posYVariants } from './style'

export interface ToastProviderContextProps
  extends RadixToast.ToastProviderProps {
  toast: {
    [key in ToastRootProps['variant']]: (
      data: Omit<ToastRootProps, 'variant'>
    ) => void
  }
}

type ToastProviderProps = {
  children: ReactNode
  posX: 'left' | 'right'
  posY: 'top' | 'bottom'
}

export const ToastProviderContext = createContext<ToastProviderContextProps>(
  {} as ToastProviderContextProps
)

const ToastProvider: FC<ToastProviderProps> = ({ children, posX, posY }) => {
  const [messages, setMessages] = useState<ToastRootProps[]>([])

  const error = useCallback(
    (data: Omit<ToastRootProps, 'variant'>) => {
      setMessages([...messages, { ...data, variant: 'error' }])
    },
    [messages, setMessages]
  )

  const success = useCallback(
    (data: Omit<ToastRootProps, 'variant'>) => {
      setMessages([...messages, { ...data, variant: 'success' }])
    },
    [messages, setMessages]
  )

  const alert = useCallback(
    (data: Omit<ToastRootProps, 'variant'>) => {
      setMessages([...messages, { ...data, variant: 'alert' }])
    },
    [messages, setMessages]
  )

  const toast = {
    error,
    alert,
    success,
  }

  return (
    <ToastProviderContext.Provider
      value={{
        toast,
      }}
    >
      <RadixToast.Provider swipeDirection={posX}>
        {children}
        {messages.map((item, index) => (
          <ToastRoot
            key={index}
            variant={item.variant}
            title={item.title}
            desc={item.desc}
          />
        ))}
        <RadixToast.Viewport
          className={clsx(
            'fixed z-50 p-2 flex flex-col-reverse gap-2 max-h-44 overflow-auto scrollbar-hide',
            posXVariants[posX],
            posYVariants[posY]
          )}
        />
      </RadixToast.Provider>
    </ToastProviderContext.Provider>
  )
}

export default ToastProvider

export const useToastProviderContext = (): ToastProviderContextProps => {
  const context = useContext(ToastProviderContext)

  if (context === undefined) {
    throw new Error('Context should be used under a provider')
  }

  return context
}
