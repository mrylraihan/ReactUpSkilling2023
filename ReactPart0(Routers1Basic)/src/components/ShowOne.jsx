import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fnGetOne } from '../utililties/fn'
function ShowOne() {
    const params = useParams()
    const id = params.id
    const [post, setPost] = useState('')
    const nav = useNavigate()
    useEffect(() => {
        fnGetOne(setPost,id)
    }, [id])

 console.log(id)
    return (
        <div className='app'>
            <h1>Show One</h1>
            <div>
                {post.title && <h3>{post.title}</h3>}
                {post.body  && <p>{post.body}</p>}
            </div>
            <button onClick={()=>nav(-1)}>go back</button>
        </div>
    )
}

export default ShowOne