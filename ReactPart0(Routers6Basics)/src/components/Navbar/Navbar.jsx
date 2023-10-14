import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
function Navbar() {
  return (
    <div className={styles.nav}>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/more'><li>More</li></Link>
        <Link to='/about'><li>About</li></Link>
      </ul>
    </div>
  )
}

export default Navbar