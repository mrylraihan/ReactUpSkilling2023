import React from 'react'
import { useNavigate } from 'react-router-dom'

function Test() {
    const nav = useNavigate()
    const goHome = ()=>nav('/')
    const goAbout = ()=>nav('/about')
  return (
    <div className='app'>
          <h1>Test</h1>
          <button onClick={goHome}>Go Home</button>
          <button onClick={goAbout}>Go to About</button>
    </div>
  )
}

export default Test