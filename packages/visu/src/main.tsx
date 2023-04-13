import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { Toast } from './library'
import './library/styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Toast.Provider
      posX="right"
      posY="top"
      message={[
        {
          variant: 'success',
          desc: 'success desc',
          title: 'success',
        },
        {
          variant: 'error',
          desc: 'error desc',
          title: 'error',
        },
        {
          variant: 'alert',
          desc: 'alert desc',
          title: 'alert',
        },
      ]}
    >
      <App />
    </Toast.Provider>
  </React.StrictMode>
)
