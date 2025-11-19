import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


import { ToastContainer } from 'react-toastify'
import MainData from './context/MainData.jsx'


createRoot(document.getElementById('root')).render(
    <MainData>
   <BrowserRouter>
    <App />
    <ToastContainer />
 </BrowserRouter>
 

 </MainData>
)
