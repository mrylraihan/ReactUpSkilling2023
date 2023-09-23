import React, { useState } from 'react'

function Test() {
    const [isOn, setIsOn] = useState(true)
  return (
    <div className='app'>
        {isOn && <h1>Test</h1>}
        <button onClick={()=>setIsOn(!isOn)}>Toggle</button>
    </div>
  )
}

export default Test