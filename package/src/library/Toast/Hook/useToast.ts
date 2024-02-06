import { ToastProviderContext, ToastProviderContextProps } from '../Provider'

import { useContext } from 'react'

export const useToast = (): ToastProviderContextProps => {
  const context = useContext(ToastProviderContext)

  if (!context || !Object.keys(context).length) {
    throw new Error('Context should be used under a provider')
  }

  return context
}
