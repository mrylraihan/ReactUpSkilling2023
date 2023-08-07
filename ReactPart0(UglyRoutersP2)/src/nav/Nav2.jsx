import React from 'react'
import { Link } from 'react-router-dom'
function Nav2() {
  return (
    <div>
        <ul>
            <li><Link to='/2'>Home</Link></li>
            <li><Link to='/2/about'>About</Link></li>
            <li><Link to='/2/more'>More</Link></li>
        </ul>
    </div>
  )
}

export default Nav2