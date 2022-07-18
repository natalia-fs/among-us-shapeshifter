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
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      limit={4}
      pauseOnHover
      pauseOnFocusLoss={false}
      draggable
    />
    <React.StrictMode>
      <CrewmatesProvider>
        <App />
      </CrewmatesProvider>
    </React.StrictMode>
  </>
)
