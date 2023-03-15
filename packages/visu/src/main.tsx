import React from 'react'
import ReactDOM from 'react-dom/client'

import { appStyle } from '@styles/global'

import App from './App'
import './library/styles/index.css'

appStyle()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
