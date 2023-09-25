import { useRouter } from 'next/router'
import React from 'react'

function Home() {
    const router = useRouter()
  return (
    <div>
        <h1>Home</h1>
        <button onClick={()=>router.push('new-meetup')}>Go to Meet up</button>
    </div>
  )
}

export default Home