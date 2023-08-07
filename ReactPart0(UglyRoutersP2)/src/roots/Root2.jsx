import React from 'react'
import Nav2 from '../nav/Nav2'
import { Outlet, useNavigate } from 'react-router-dom'
function Root2() {
    const nav = useNavigate()
  return (
    <div>
          <h1>Root2</h1>
          <button onClick={nav.bind(this, '/')}>go to root 1</button>
          <Nav2 />
          <Outlet />
    </div>
  )
}

export default Root2