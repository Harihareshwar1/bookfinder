import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {GoogleOAuthProvider} from "@react-oauth/google"
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <GoogleOAuthProvider clientId='1033311378918-ud9h5e1n7nq4n0rnbqmt08dkdmqf2615.apps.googleusercontent.com'>
     <BrowserRouter>
      <App />
    </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>,
)
