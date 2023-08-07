import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import styles from './Root.module.css'
function Root() {
    return (
        <div>
            <h1>Root</h1>
            <MainNavigation />
            <main className={styles.content}>
            <Outlet />
            </main>
        </div>
    )
}

export default Root