import React, { useEffect, useState } from 'react'

function Test2() {
    const [isOn, setIsOn] = useState(false)

    useEffect(()=>{
     console.log('is ',isOn)   
    },[])

    const toggle = () => setIsOn(!isOn)

  return (
    <div className='app'>
          <h1>Test2</h1>
          <p>using useEffect with any empty dependency array</p>
          <button onClick={toggle}>click me</button>
    </div>
  )
}

export default Test2