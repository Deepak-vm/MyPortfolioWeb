import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { init } from 'emailjs-com'
import './index.css'
import App from './App.jsx'

init(import.meta.env.EMAILJS_USER_ID);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
