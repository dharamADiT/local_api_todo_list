import React, { createContext, useState } from 'react'
export const dataContext = createContext()

const UserData = (props) => {
    const [todo, setTodo] = useState([ "dharam"])
  return (
    <dataContext.Provider  value={{todo, setTodo}}>
        {props.children}
    </dataContext.Provider>
  )
}

export default UserData

