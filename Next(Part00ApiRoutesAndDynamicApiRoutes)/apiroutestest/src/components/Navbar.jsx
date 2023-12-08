import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
function Navbar(props) {
  return (
    <>
      <div className={styles.navbar}>
        <ul>
                  <Link href={'/'}><li>Home</li></Link>
                  <Link href={'/About'}><li>About</li></Link>
                  <Link href={'/More'}><li>More</li></Link>
                  <Link href={'/test/dynamicRoute'}><li>Dynamic</li></Link>
           
        </ul>
    </div>
    {props.children}
    </>
  )
}

export default Navbar