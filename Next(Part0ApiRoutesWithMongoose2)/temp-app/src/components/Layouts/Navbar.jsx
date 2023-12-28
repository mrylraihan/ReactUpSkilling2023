import Link from 'next/link'
import React from 'react'

function Navbar(props) {
  return (
    <>
    <div className='app'>
          <Link href='/'><button>Home</button></Link>
          <Link href='/all'><button>All Data</button></Link>
          <Link href='/add'><button>Add Data</button></Link>
    </div>
    {props.children}
    </>
  )
}

export default Navbar