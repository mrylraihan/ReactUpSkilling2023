import React from 'react'
import Link from 'next/link'
function Home() {
  return (
    <div className='app'>
      <h1>Home</h1>
      <Link href={'/People'}><button>Get Started</button></Link>
    </div>
  )
}

export default Home