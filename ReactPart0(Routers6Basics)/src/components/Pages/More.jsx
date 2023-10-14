import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function More() {
  return (
    <div className='app'>
        <h1>More</h1>
        <ul>
          <Link to='teaching'><li>Teaching</li></Link>
          <Link to='plan'><li>Plans</li></Link>
        </ul>
        <div>
          <Outlet/>
        </div>
    </div>
  )
}

export default More