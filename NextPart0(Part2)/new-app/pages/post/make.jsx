import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'

function make({setAllPost}) {
    const [post, setPost] = useState({title:"", body:""})
    const titleRef = useRef()
    const bodyRef = useRef()
    const router = useRouter()

    const submitHandler = (e)=>{
        e.preventDefault()
        const titleInput= titleRef.current.value
        const bodyInput= bodyRef.current.value
        setPost({ title: titleInput, body: bodyInput })
        setAllPost(prev=>{
            return[...prev, {title:titleInput, body:bodyInput, id:prev.length+1}]
        })
        titleRef.current.value = ''
        bodyRef.current.value = ''
    }
  return (
    <>
        <div className='app'>
            <h1>Create a Post</h1>
           <form onSubmit={submitHandler}>
                <div>
                    <label>Title:
                        <input type="text" ref={titleRef} />
                    </label>
                </div>
                <div>
                    <label>body:
                        <input type="text" ref={bodyRef} />
                    </label>
                </div>
                <button type='submit'>submit</button>
            </form>
        </div>
            { post.title && <div className='app'>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={() => router.push('/post')}>Go back</button>
        </div>}
    </>
  )
}

export default make