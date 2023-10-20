import React from 'react'
import useToggle from '../hooks/use-toggle'

function TestCustomHook() {
    const [toggle, togglng] = useToggle()
  return (
    <div className='app'>
          {toggle && <h2>TestCustomHook</h2>}
          <button onClick={togglng}>Toggle</button>
    </div>
  )
}

export default TestCustomHook