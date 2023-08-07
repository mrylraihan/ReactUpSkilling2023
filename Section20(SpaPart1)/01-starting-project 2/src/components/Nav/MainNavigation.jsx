import React from 'react'
import { Link } from 'react-router-dom'

function MainNavigation() {
  return (
    <header>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/more'>More</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation