import React, { useState, useEffect } from 'react'


function TimerComp() {
    const [counter, setCounter] = useState(0)
    const [isOn, setIsOn] = useState(false)

    useEffect(()=>{
        if(isOn){
            setTimeout(()=>{
                setCounter(prev=>prev+=1)
            },1000)
        }
    })
  return (
    <div className='app'>
          <h1>TimerComp</h1>
          <h4>{counter}</h4>
          <button onClick={()=>setIsOn(!isOn)}>Start Counter</button>
    </div>
  )
}

export default TimerComp