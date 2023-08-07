import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Nav from '../nav/Nav'
function Root() {
  const nav = useNavigate()
  return (
    <div>
      <h1>root 1</h1>
      <button onClick={nav.bind(this, '/2')}>go to root 2</button>
        <Nav/>
        <Outlet/>
    </div>
  )
}

export default Root