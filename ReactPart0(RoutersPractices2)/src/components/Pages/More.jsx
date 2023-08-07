import React from 'react'
import { useNavigate } from 'react-router-dom'

function More() {
  const nav = useNavigate()
  const goHome = () => nav('/')
  return (
    <div className='app'>
      <h1>More</h1>
      <button onClick={goHome}>go home</button>
    </div>
  )
}

export default More