import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const nav = useNavigate()
  return (
    <div className='app'>
        <h1 onClick={nav.bind(this,-1)}>The About Page</h1>
    </div>
  )
}

export default About