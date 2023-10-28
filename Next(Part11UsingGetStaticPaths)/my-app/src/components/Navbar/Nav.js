import Link from 'next/link'
import React from 'react'

function Nav(props) {
  return (
    <div>
        <h1>Navbar</h1>
        <ul>
            <Link href={'/'}><li>Home</li></Link>
            <Link href={'/people'}><li>People</li></Link>
            <Link href={'/more'}><li>More</li></Link>
        </ul>
        <div>
            {props.children}
        </div>
    </div>
  )
}

export default Nav