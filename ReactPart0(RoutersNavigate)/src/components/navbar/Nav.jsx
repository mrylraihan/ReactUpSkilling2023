import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='app'>
          <h1>Nav</h1>
          <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>about</li></Link>
            <Link to='/more'><li>more</li></Link>
            
            {/* 
             <Link to='/'><li>test</li></Link>
            <Link to='/home2'><li>home</li></Link>
            <Link to='/about'><li>about</li></Link>
            <Link to='/more'><li>more</li></Link>
            */}
          </ul>
    </div>
  )
}

export default Nav