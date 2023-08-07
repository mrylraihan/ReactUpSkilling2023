import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
function DetailsPage(props) {
  const [post, setPost] = useState('')
  const router = useRouter()
  const postId = router.query.postId

  useEffect(()=>{
    const singlePost = props.post.filter(ele=>ele.id == postId)[0]
    console.log(singlePost)
    setPost(singlePost)
  },[postId])
  
  return (
    <>
    <div className='app'>
        <h1>DetailsPage {postId}</h1>
        {post && <h2>{post.title}</h2>}
        {post && <p>{post.body}</p>}
        <button onClick={router.back}>go back</button>
    </div>
    </>

  )
}

export default DetailsPage