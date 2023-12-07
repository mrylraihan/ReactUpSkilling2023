import Link from 'next/link'
import React from 'react'

function Navbar(props) {
  return (
    <>
    <div>
        <h1>Navbar</h1>
        <ul>
            <Link href='/people'><li>People</li></Link>
            <Link href='/'><li>Home</li></Link>
        </ul>
    </div>
    {props.children}
    </>
  )
}

export default Navbar