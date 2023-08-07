import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
function NewsPage(props) {
  const router = useRouter()
  let content = props.post.map(ele=>{
    return <div className='app' key={ele.id}>
      <Link href={`post/${ele.id}`}><p>{ele.title}</p></Link>
    </div>
  })
  return (
    <>
    <div className='app'>
    <h1>The News Page</h1>
    <button onClick={router.back}>Go Home</button>
        <Link href={"/post/createPost"}><button>Create Post</button></Link>
    </div>
    <div>
      {content}
    </div>
    </>
  )
}

export default NewsPage