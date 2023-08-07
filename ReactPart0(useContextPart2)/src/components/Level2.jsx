import React, { useContext } from 'react'
import TimerContext from '../store/timer-context'

function Level2() {
    const ctx = useContext(TimerContext)
    const turnOnTimer =()=>{
        ctx.setIsOn(prev=>!prev)
    }
  return (
    <div>
        <h4>{ctx.count}</h4>
          <button onClick={turnOnTimer}>is On</button>
    </div>
  )
}

export default Level2