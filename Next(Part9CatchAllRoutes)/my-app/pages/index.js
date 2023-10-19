import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
function Home() {
  const router = useRouter()
  return (
    <div className='app'>
      <h1>Home</h1>
      <button onClick={()=>router.push('people')}>Get Started</button>
    </div>
  )
}

export default Home

