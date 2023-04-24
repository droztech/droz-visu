import * as RadixToast from '@radix-ui/react-toast'
import { PosX, PosXClass, PosY, PosYClass } from '@types'
import { clsx } from 'clsx'
import { FC, ReactNode, createContext, useCallback, useState } from 'react'

import ToastRoot, { ToastRootProps } from '../Root'

export interface ToastProviderContextProps
  extends RadixToast.ToastProviderProps {
  toast: {
    [key in ToastRootProps['variant']]: (
      data: Omit<ToastRootProps, 'variant'>
    ) => void
  }
}

export interface ToastProviderProps {
  children: ReactNode
  posX: PosX
  posY: PosY
}

export const posXClassVariants: PosXClass = {
  left: 'left-0',
  right: 'right-0',
}

export const posYClassVariants: PosYClass = {
  bottom: 'bottom-0',
  top: 'top-0',
}

export const ToastProviderContext = createContext<ToastProviderContextProps>(
  {} as ToastProviderContextProps
)

const ToastProvider: FC<ToastProviderProps> = ({ children, posX, posY }) => {
  const [messages, setMessages] = useState<ToastRootProps[]>([])

  const alert = useCallback(
    (data: Omit<ToastRootProps, 'variant'>) => {
      setMessages([...messages, { ...data, variant: 'alert' }])
    },
    [messages, setMessages]
  )

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

  const toast = {
    alert,
    error,
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
            posXClassVariants[posX],
            posYClassVariants[posY]
          )}
        />
      </RadixToast.Provider>
    </ToastProviderContext.Provider>
  )
}

export default ToastProvider
