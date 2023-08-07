import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
          About
          <p><Link to='..' relative='path'>go back</Link></p>
    </div>
  )
}

export default About