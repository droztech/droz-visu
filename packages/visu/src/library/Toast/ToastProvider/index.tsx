import * as RadixToast from '@radix-ui/react-toast'
import { clsx } from 'clsx'
import { FC, useMemo } from 'react'

import Toast, { ToastRootProps } from '../ToastRoot'
import { posXVariants, posYVariants } from './style'

export interface ToastProvierProps extends RadixToast.ToastProviderProps {
  posX: 'left' | 'right'
  posY: 'top' | 'bottom'
  message: ToastRootProps[]
}

const ToastProvier: FC<ToastProvierProps> = ({
  posX,
  posY,
  message,
  children,
  ...rest
}) => {
  const viewPosClass = useMemo(() => {
    return clsx(posXVariants[posX], posYVariants[posY])
  }, [posX, posY])

  return (
    <RadixToast.Provider swipeDirection={posX} {...rest}>
      {children}

      {message.map((item, index) => (
        <Toast
          key={index}
          variant={item.variant}
          title={item.title}
          desc={item.desc}
        />
      ))}
      <RadixToast.Viewport
        className={clsx(
          'fixed z-50 p-2 flex flex-col-reverse gap-2 h-48 overflow-auto scrollbar-hide',
          viewPosClass
        )}
      />
    </RadixToast.Provider>
  )
}

export default ToastProvier
