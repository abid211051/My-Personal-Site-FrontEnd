import React, { createContext, useState } from 'react'

export const ToggleContext = createContext(null)

const ButtonContext = ({children}) => {
    const [toggle, setToggle] = useState(false)
    const changetoggle = ()=>{
        setToggle(!toggle)
    }
  return (
    <ToggleContext.Provider value={{toggle, changetoggle}}>
        {children}
    </ToggleContext.Provider>
  )
}

export default ButtonContext
