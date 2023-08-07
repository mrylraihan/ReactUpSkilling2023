import React, { useEffect, useState } from 'react'

function Timer() {
    const [isOn, setIsOn] = useState(false)
    const [count, setCount] = useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            if(isOn)
            setCount(prev=>prev + 1)
        },1000)
    })

    const startTimer = () =>{
        setIsOn(!isOn)
    }
  return (
    <div className='app'>
        <h1>{count}</h1>
          <button onClick={startTimer}>{isOn ? 'stop' :'start'}</button>
    </div>
  )
}

export default Timer