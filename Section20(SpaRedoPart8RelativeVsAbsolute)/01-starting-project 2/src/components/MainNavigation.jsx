import React from 'react'
import {Link,  NavLink } from 'react-router-dom'
import styles from './MainNavigation.module.css'
function MainNavigation() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li><NavLink className={({ isActive }) =>{ 
            console.log(isActive)
            return isActive ? styles.active : undefined
          }} to='/home' >Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.active : undefined} to='/products'>Products</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? styles.active : undefined} to='/about'>About</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation