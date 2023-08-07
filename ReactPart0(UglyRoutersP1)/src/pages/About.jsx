import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='app'>
          <h1>About</h1>
          <h3><Link to='/'>Go Back</Link></h3>
    </div>
  )
}

export default About