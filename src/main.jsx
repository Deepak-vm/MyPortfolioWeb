import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { init } from 'emailjs-com'
import './index.css'
import App from './App.jsx'

// Initialize EmailJS - Replace 'your_user_id' with your actual EmailJS User ID
init("oGC_JKJRVQh1HcC_h");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
