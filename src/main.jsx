import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { init } from 'emailjs-com'
import './index.css'
import App from './App.jsx'

// Initialize EmailJS with environment variable
const userID = import.meta.env.VITE_EMAILJS_USER_ID;
init(userID);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
