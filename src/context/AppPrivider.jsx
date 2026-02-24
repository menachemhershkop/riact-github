import React, { createContext, useState } from 'react'

const AppContext = createContext()

function AppPrivider({children}) {
  
    const [counter, setCounter] = useState(0)
    const [flags, setFlags] = useState(false)
    const [flagsTime, setFlagsTime] = useState(false)
    

    return (
    <AppContext value={{counter, setCounter, flags, setFlags, flagsTime, setFlagsTime}}>
        {children}
    </AppContext>
  )
}

export  { AppPrivider, AppContext }