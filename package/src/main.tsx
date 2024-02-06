import App from './App'

import './library/styles/index.css'
import { ToastProvider } from '@library'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ToastProvider posX="right" posY="bottom">
      <App />
    </ToastProvider>
  </StrictMode>,
)
