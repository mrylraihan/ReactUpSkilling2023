import React from '../../../ReactPart0(RoutersCodeVolutionPart10)/node_modules/@types/react'
import { useNavigate } from '../../../ReactPart0(RoutersCodeVolutionPart10)/node_modules/react-router-dom/dist'

function New() {
    const nav = useNavigate()
  return (
    <div className='app'>
          <h3>New</h3>
          <button onClick={nav.bind(this, -1)}>go back</button>
        </div>
  )
}

export default New