import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateUser from '../pages/CreateUser'
import UpdateUser from '../pages/UpdateUser'
import Home from '../pages/Home'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/user-create' element={<CreateUser/>} />
        <Route path='/update/:id' element={<UpdateUser/>} />

    </Routes>
  )
}

export default MainRoutes