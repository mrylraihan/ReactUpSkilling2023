import React from 'react'
import useToggle from '../hooks/use-toggle'

function TestCustomHook2() {
    const [toggle, togglng] = useToggle(true)
  return (
    <div className='app'>
          {toggle && <h2>TestCustomHook</h2>}
          <button onClick={togglng}>Toggle</button>
    </div>
  )
}

export default TestCustomHook2