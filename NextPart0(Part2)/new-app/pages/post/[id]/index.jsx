import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function index({allPost, removePost}) {
    const [post, setPost] = useState({})
    const router = useRouter()
    const id = router.query.id
    useEffect(()=>{
        const data = allPost.find(ele=>ele.id ==+id)
        setPost(data)
    },[])
    console.log(allPost)
  return (
    <div className='app'> 
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <button onClick={router.back}>Go back</button>
          <button onClick={removePost.bind(this, +id)}>delete</button>
          <button onClick={()=>router.push(`${id}/edit`)}>edit</button>
    </div>
  )
}

export default index