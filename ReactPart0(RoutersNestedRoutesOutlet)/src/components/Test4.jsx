import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Test4() {
  return (
    <div>
      <h1>Test4</h1>
      <ul>
        <li><Link to='/test4/page1'>Page1</Link></li>
        <li><Link to='/test4/page2'>Page2</Link></li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default Test4