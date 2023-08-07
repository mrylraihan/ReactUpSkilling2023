import React, { useEffect, useState } from 'react'


function Test3UE() {
    const [toggle, setToggle] = useState(false)

    const toggleHandler = () => setToggle(!toggle)
    
    useEffect(() => {
        console.log('useEffect working with dependency array using toggle as a dependency');
    },[toggle])

  return (
    <div className='app'>
          <h1>Test3UE</h1>
          <p>This is useEffect with out an dependency array</p>
          <p>{toggle.toString()}</p>
          <button onClick={toggleHandler}>toggle render</button>
    </div>
  )
}

export default Test3UE