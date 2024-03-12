import React from 'react'
import UserContext from './Context'
import { useState } from 'react'

function UserContextProvider({children}) {
    const [user,setUser]=useState(null)
  return (
   < UserContext.Provider value={{user,setUser}}>
      {children}
   </ UserContext.Provider>
  )
}

export default UserContextProvider
