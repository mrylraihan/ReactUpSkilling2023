import { useRouter } from 'next/router'
import React from 'react'

function index() {
  const router = useRouter()
  return (
    <div className='app'>
      <h1>Home</h1>
      <button onClick={()=>router.push('/all')}>Go to All</button>
      <button onClick={()=>router.push('/add')}>Insert One</button>
    </div>
  )
}

export default index