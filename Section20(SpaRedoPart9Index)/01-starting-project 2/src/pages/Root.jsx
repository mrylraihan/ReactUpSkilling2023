import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

function Root() {
    return (
        <div>
            <h1>Root</h1>
            <MainNavigation />
            <main>
            <Outlet />
            </main>
        </div>
    )
}

export default Root