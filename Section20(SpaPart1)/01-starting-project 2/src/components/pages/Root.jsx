import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../Nav/MainNavigation'
function RootLayout() {
  return (
    <>
    <MainNavigation/>
    <Outlet></Outlet>
    </>
  )
}

export default RootLayout