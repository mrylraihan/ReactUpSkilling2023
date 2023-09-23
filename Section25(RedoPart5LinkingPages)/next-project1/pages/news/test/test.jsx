import { useRouter } from 'next/router'
import React from 'react'

function test() {
    const router = useRouter()
  return (
    <div>
        <h1>Test</h1>
        <button onClick={router.push.bind(this, '/')}>Go Home</button>
          <button onClick={router.back}>Go Back</button>
    </div>
  )
}

export default test