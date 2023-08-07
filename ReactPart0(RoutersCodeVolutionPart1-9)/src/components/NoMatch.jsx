import React from '../../../ReactPart0(RoutersCodeVolutionPart10)/node_modules/@types/react'
import { useNavigate } from '../../../ReactPart0(RoutersCodeVolutionPart10)/node_modules/react-router-dom/dist'

function NoMatch() {
    const nav = useNavigate()
  return (
    <div className='app'>
        <h1>Sorry no Route Match's</h1>
        <button onClick={nav.bind(this, -1)}>Go back Home!</button>
    </div>
  )
}

export default NoMatch