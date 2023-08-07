import { useRouter } from 'next/router'
import React from 'react'

function More() {
    const router = useRouter()
  return (
    <div className='app'>
        <button onClick={router.back}>Go back</button>
          <h1>More</h1>
    </div>
  )
}

export default More