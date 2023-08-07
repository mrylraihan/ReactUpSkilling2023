import React from 'react'
import Navbar2 from '../nav/Navbar2'
import { Outlet } from 'react-router-dom'
function About() {
  return (
    <div className='app'>
          <h1>About</h1>
          <Navbar2/>
          <Outlet/>
    </div>
  )
}

export default About