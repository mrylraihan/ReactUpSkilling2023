import { useRouter } from 'next/router'
import React from 'react'

function test1() {
  const router = useRouter()
  const num = router.query.num

  return (
    <div className='app'>
      <h1>Test {num}</h1>
      <button onClick={router.back}>Go back</button>
    </div>
  )
}

export default test1