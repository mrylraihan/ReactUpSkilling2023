import React, { useEffect, useState } from 'react'

function Test3() {
    const [isOn, setIsOn] = useState(false)

    useEffect(()=>{
     console.log('is ',isOn)   
    }, [isOn])

    const toggle = () => setIsOn(!isOn)

  return (
    <div className='app'>
          <h1>Test3</h1>
          <p>using useEffect without any dependency array</p>
          <button onClick={toggle}>click me</button>
    </div>
  )
}

export default Test3