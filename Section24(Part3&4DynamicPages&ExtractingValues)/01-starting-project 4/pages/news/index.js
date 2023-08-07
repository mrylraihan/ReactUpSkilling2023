import React from 'react'
import {useRouter} from 'next/router'
function NewsPage() {
  const router = useRouter()
  return (
    <div className='app'>
    <h1>The News Page</h1>
    <button onClick={router.back}>Go Home</button>
    </div>
  )
}

export default NewsPage