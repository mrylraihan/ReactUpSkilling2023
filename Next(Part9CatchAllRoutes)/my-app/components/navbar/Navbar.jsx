import Link from 'next/link'
import React from 'react'

function Navbar(props) {
  return (
    <div>
        <ul>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/people'}>people</Link></li>
            <li><Link href={'/people/create'}>create</Link></li>
        </ul>
        <div>
            {props.children}
        </div>
    </div>
  )
}

export default Navbar