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
      autoClose={2000}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      limit={3}
      pauseOnFocusLoss={true}
      draggable
    />
    <CrewmatesProvider>
      <React.StrictMode>
          <App />
      </React.StrictMode>
    </CrewmatesProvider>
  </>
)
