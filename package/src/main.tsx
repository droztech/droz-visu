import App from './App'
import './library/styles/index.css'
import { ToastProvider } from '@library'
import React from 'react'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToastProvider posX="right" posY="bottom">
      <App />
    </ToastProvider>
  </React.StrictMode>,
)
