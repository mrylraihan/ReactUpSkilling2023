import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/extra'><li>Extra</li></Link>
        <Link to='/all'><li>See Post</li></Link>
        <Link to='/add'><li>Add</li></Link>
      </ul>
    </div>
  )
}

export default Navbar