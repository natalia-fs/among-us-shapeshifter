import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import App from './App'
import { CrewmatesProvider } from './CrewmatesContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      limit={1}
      pauseOnFocusLoss={false}
      draggable
    />
    <CrewmatesProvider>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </CrewmatesProvider>
  </>
)
