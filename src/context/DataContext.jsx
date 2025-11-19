import React, { createContext, useState } from 'react'
export const datacontext = createContext()

const dataContext = (props) => {
    const [todo, setTodo] = useState([ "dharam"])
  return (
    <datacontext.Provider value={{todo, setTodo}}>
        {props.children}
    </datacontext.Provider>
  )
}

export default dataContext