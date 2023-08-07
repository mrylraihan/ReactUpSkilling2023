import React, { useEffect, useState } from 'react'


function Test2UE() {
    const [toggle, setToggle] = useState(false)

    const toggleHandler = () => setToggle(!toggle)
    
    useEffect(() => {
        console.log('useEffect working');
    })

  return (
    <div className='app'>
          <h1>Test2UE</h1>
          <p>This is useEffect with out an dependency array</p>
          <p>{toggle.toString()}</p>
          <button onClick={toggleHandler}>toggle render</button>
    </div>
  )
}

export default Test2UE