import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex items-center   justify-center gap-10 py-6'>
        <NavLink className={(e)=>e.isActive? "text-red-400": ""} to="/">Home</NavLink>
        <NavLink className={(e)=>e.isActive? "text-red-400": ""} to="/user-create">Create To do</NavLink>
        {/* <NavLink className={(e)=>e.isActive? "text-red-400": ""} to="/update">Update</NavLink> */}
      
        </nav>
  )
}

export default Navbar