import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import DataContext from './context/DataContext.jsx'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
    <DataContext>
   <BrowserRouter>
    <App />
    <ToastContainer />
 </BrowserRouter>
 

 </DataContext>
)
