import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { AbcProvider } from './library/Toast/Abc'
import './library/styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AbcProvider>
      <App />
    </AbcProvider>
  </React.StrictMode>
)
