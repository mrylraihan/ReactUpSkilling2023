import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
function Navbar(props) {
  return (
    <>
    <div className={styles.nav}>
        <ul>
              <Link href={'/'}><li>Home</li></Link>
              <Link href={'/albums'}><li>Albums</li></Link>
              <Link href={'/blogs'}><li>Blogs</li></Link>
            <Link href={'/users'}><li>Users</li></Link>
        </ul>
        
    </div>
          {props.children}
    </>
  )
}

export default Navbar