import React from 'react'
import { useNavigate } from 'react-router-dom'

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