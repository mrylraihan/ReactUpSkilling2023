import React, { useEffect, useState } from 'react'

function Level3(props) {
    const [counter, setCounter] = useState(0)
    useEffect(()=>{
      if(props.isOn){
        setTimeout(()=>{
          setCounter(prev=>prev+1)
        },1000)
      }
    })
    const turnOn = ()=> props.setIsOn(!props.isOn)
    console.log(counter)
  return (
    <div>
      <h1>Level 3</h1>
      <p>{counter}</p>
      <button onClick={turnOn}>{props.isOn?"turn of Timer":'turn on Timer'}</button>
    </div>
  )
}

export default Level3