import React from 'react'
import {useNavigate} from 'react-router-dom'
function About() {
  const nav = useNavigate()
  const clickHandler = ()=> nav('/'+Math.random())
  return (
    <div>
          <h1>About</h1>
          <button onClick={clickHandler}>Go somewhere Random</button>
    </div>
  )
}

export default About