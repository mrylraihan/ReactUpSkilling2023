import React from 'react'
import { Link } from 'react-router-dom'

function Navbar2() {
  return (
    <div className='app'>
        <ul>
            <Link to='/about/education'><li>Education</li></Link>
            <Link to='/about/hobbies'><li>Hobbies</li></Link>
        </ul>
    </div>
  )
}

export default Navbar2