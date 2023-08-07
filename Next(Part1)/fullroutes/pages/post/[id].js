import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
function Single() {
  const [post , setPost] = useState('')
  const router = useRouter()
  const id = router.query.id
  console.log(id)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/'+id)
      .then(res => res.json())
      .then(setPost)
      .catch(console.error)
  },[id])
  return (
    <div className='app'>
      {post &&
        <>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <button onClick={router.back}>Go back!</button>
        </>
      }
    </div>
  )
}

export default Single