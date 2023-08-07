import React from 'react'
import {Link} from 'react-router-dom'
import styles from './MainNavigation.module.css'
function MainNavigation() {
  return (
    <header className={styles.header}>
        <nav>
            <ul className={styles.list}>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation