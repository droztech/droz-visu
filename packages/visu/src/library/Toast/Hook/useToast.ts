import { useContext } from 'react'

import { ToastProviderContext, ToastProviderContextProps } from '../Provider'

export const useToast = (): ToastProviderContextProps => {
  const context = useContext(ToastProviderContext)

  if (context === undefined) {
    throw new Error('Context should be used under a provider')
  }

  return context
}
