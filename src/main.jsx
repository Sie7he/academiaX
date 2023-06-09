import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Memory from './services/Memory.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Memory>
    <BrowserRouter>
     <App />
   </BrowserRouter>
  </Memory>
  
)
