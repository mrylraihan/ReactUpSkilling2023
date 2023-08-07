import React from 'react'
import useToggle from '../hooks/use-toggle'

function TestCustomHook() {
    const [toggle1, toggleHandler1] = useToggle(true)
    const [toggle2, toggleHandler2] = useToggle()
    console.log('toggle 1 is:', toggle1 )
    console.log('toggle 2 is:', toggle2)
  return (
    <div className='app'>
          <h1>TestCustomHook</h1>
          <h3>Testing Toggle 1 {toggle1.toString()}</h3>
          <h3>Testing Toggle 2 {toggle2.toString()}</h3>
          <div className='app'>
          {toggle1 && <h2>Testing Toggle 1 {toggle1.toString()}</h2>}
            <button onClick={toggleHandler1}>toggle 1</button>
          </div>
          <div className='app'>
          {toggle2 && <h2>Testing Toggle 2 {toggle2.toString()}</h2>}
            <button onClick={toggleHandler2}>toggle 2</button>
          </div>
    </div>
  )
}

export default TestCustomHook