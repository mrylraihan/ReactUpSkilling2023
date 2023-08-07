import React from 'react'

const TimerContext = React.createContext({
    count:0,
    setIsOn:()=>{}
})
export default TimerContext