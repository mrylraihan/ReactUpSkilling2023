import Link from 'next/link'
import React from 'react'

function News() {
  return (
    <div className='app'>
          <h1>The News Page</h1>
          <ul>
        <Link href={"/news/1"}><li>1</li></Link>
        <Link href={"/news/2"}><li>2</li></Link>
        <Link href={"/news/3"}><li>3</li></Link>
        <Link href={"/news/details"}><li>details</li></Link>
          </ul>
    </div>
  )
}

export default News