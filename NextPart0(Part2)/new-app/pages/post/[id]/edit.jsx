import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'

function edit({ setAllPost }) {
    const [post, setPost] = useState({ title: "", body: "" })
    const titleRef = useRef()
    const bodyRef = useRef()
    const router = useRouter()
    const id = router.query.id

    const submitHandler = (e) => {
        e.preventDefault()
        let titleInput = titleRef.current.value
        let bodyInput = bodyRef.current.value
        setPost({ title: titleRef.current.value, body: bodyRef.current.value })
        setAllPost(prev => {
            return prev.map(ele => {
                if (ele.id == id) {
                    return { ...ele, title: titleInput, body: bodyInput}
                } else {
                    return ele
                }
            })
        })
        titleRef.current.value = ''
        bodyRef.current.value = ''
    }

    return (
        <>
            <div className='app'>
                <h1>Edit id:{id}</h1>
                {!post.title && <form onSubmit={submitHandler}>
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
                </form>}
            </div>
            {post.title && <div className='app'>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <button onClick={()=>router.push('/post')}>Go back</button>
            </div>}
        </>
    )
}

export default edit