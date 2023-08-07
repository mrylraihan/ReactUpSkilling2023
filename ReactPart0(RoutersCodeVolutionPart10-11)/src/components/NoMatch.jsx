import React from 'react'
import { useNavigate } from 'react-router-dom'

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