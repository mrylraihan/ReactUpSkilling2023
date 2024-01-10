import Link from 'next/link'
import styles from './Navbar.module.css'
import React from 'react'

function Navbar(props) {
  return (
    <>
    <div className={styles.nav}>
        <ul>
          <Link href={'/'}><li>Home</li></Link>
          <Link href={'/users'}><li>All Users</li></Link>
          <Link href={'/users/add'}><li>Add Users</li></Link>
          <Link href={'/chores'}><li>All chores</li></Link>
          <Link href={'/chores/add'}><li>Add chores</li></Link>
          <Link href={'/more'}><li>More</li></Link>
        </ul>
    </div>
    {props.children}
    </>
  )
}

export default Navbar