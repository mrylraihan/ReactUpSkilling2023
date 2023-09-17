import Link from 'next/link'
import React from 'react'

function Layout(props) {
  return (
    <>
    <div className='app'>
          <h1>Navbar</h1>
          <ul>
              <li><Link href={'/test/1'}>Test 1</Link></li>
              <li><Link href={'/test/2'}>Test 2</Link></li>
              <li><Link href={'/test/3'}>Test 3</Link></li>
              <li><Link href={'/'}>Home</Link></li>
          </ul>
    </div>
    <main className='app'>{props.children}</main>
    </>
  )
}

export default Layout