import React from '../../../ReactPart0(RoutersCodeVolutionPart10)/node_modules/@types/react'
import { useNavigate } from '../../../ReactPart0(RoutersCodeVolutionPart10)/node_modules/react-router-dom/dist'

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