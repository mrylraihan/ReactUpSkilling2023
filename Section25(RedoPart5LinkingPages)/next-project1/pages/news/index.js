import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function News() {
  const router = useRouter()
  return (
    <div className='app'>
          <h1>The News Page</h1>
          <ul>
        <li><a href='/news/Next-Is-Great'>NextJs is a Great Framework</a></li>
        <Link href={"/news/1"}><li>NextJs is a Great Framework</li></Link>
        <Link href={"/news/2"}><li>Something Else</li></Link>
        <Link href={"/news/details"}><li>details</li></Link>
        <button onClick={()=>router.push('/news/test')}>test Page</button>
          </ul>
    </div>
  )
}

export default News