import Link from 'next/link'
import React from 'react'

function Navbar({children}) {
  return (
    <div>

    <div className='app'>
        <ul>
            <Link href={'/'}><li>Home</li></Link>
            <Link href={'/post'}><li>All Post</li></Link>
            <Link href={'/post/make'}><li>Create Post</li></Link>
        </ul>
    </div>
    {children}
    </div>
  )
}

export default Navbar