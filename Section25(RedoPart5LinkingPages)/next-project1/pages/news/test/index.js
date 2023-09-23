import { useRouter } from 'next/router'
import React from 'react'

function index() {
    const router = useRouter()
  return (
    <div>
        <h1>testing router.push</h1>
        <button onClick={()=>router.push('test/test')}>go to testPage</button>
    </div>
  )
}

export default index