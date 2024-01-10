import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
function Navbar(props) {
  return (
    <>
    <div className={styles.nav}>
        <ul>
          <Link href={'/'}><li>Home</li></Link>
          <Link href={'/users'}><li>All Users</li></Link>
          <Link href={'/users/add'}><li>Add Users</li></Link>
          <Link href={'/notes'}><li>All Notes</li></Link>
          <Link href={'/notes/add'}><li>Add Notes</li></Link>
          <Link href={'/more'}><li>More</li></Link>
        </ul>
    </div>
    {props.children}
    </>
  )
}

export default Navbar