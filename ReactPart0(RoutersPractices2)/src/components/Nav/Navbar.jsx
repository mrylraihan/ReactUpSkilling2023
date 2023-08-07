import React from 'react'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'
function Navbar() {
  // style={{ display: 'flex', justifyContent: 'space-around', listStyleType: 'none' }}
  return (
    <>
      <div>Navbar</div>
      <ul className={styles.nav} >
        <Link to='/'><li>Home</li></Link>
        <Link to='/showAll'><li>See All</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/more'><li>More</li></Link>
      </ul>
    </>
  )
}

export default Navbar