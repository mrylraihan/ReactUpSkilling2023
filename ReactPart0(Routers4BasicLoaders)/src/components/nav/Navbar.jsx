import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='app'>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/all'><li>All</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/education'><li>Education</li></Link>
        <Link to='/hobbies'><li>Hobbies</li></Link>
      </ul>
    </div>
  )
}

export default Navbar