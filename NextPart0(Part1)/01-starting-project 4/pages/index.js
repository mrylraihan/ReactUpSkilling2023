import React from 'react'
import Link from 'next/link'
function HomePage() {
  return (
    <div className='app'>
    <h1>HomePage</h1>
      <button><Link href={'/post'}>Check out the Post</Link></button>
    </div>
  )
}

export default HomePage