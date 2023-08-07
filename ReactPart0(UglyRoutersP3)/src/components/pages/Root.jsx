import React from 'react'
import Navbar from '../nav/Navbar'
import {Outlet} from 'react-router-dom'
function Root() {
  return (
    <>
    <div className='app'>
          <h1>Root</h1>
    </div>
          <Navbar/>
          <Outlet/>
    </>
  )
}

export default Root