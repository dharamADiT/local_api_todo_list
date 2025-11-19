import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import MainRoutes from './routes/MainRoutes'

const App = () => {
  
   
  return (
    <div className='w-full min-h-screen bg-gray-800 text-white px-4 sm:px-8 lg:px-10 overflow-x-hidden'>
      <Navbar/>
      <MainRoutes/>
      
      

      
    </div>
  )
}

export default App